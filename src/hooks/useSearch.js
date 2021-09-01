import { useState } from "react";
import { useDispatch } from "react-redux";
import { BEERS_FILTER_NULL } from "../store/types/beers";
import { beersSearch } from '../store/action-creactors/beerDetails';
import { useEffect } from "react";

let time;
// нельзя использовать вот так вот переменные для дебоунса. 
// Если у тебя этот хук одновременно будет использоваться в 2 местах, 
// то каждый из хуков будет перезаписывать эту переменную. 
// Можешь вместо создания переменной попробовать useRef использовать в хуке


const useSearch = () => {
  const [search, setWord] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    clearTimeout(time);
    time = setTimeout(() => {
      dispatch(beersSearch(search, 1, 25));
    }, 2000);
  }, [search])

  const handlerSearch = e => {
    dispatch({type:BEERS_FILTER_NULL});
    setWord(e.target.value);
  }

  return {
    search, 
    handlerSearch,
  }
}

export default useSearch;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BEERS_FILTER_NULL, BEERS_FIRST_LETTER } from "../store/types/beers";
import { beersSearch } from '../store/action-creactors/beerDetails';
import { useEffect } from "react";

let time;

const useSearch = () => {
  const [word, setWord] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    clearTimeout(time);
    time = setTimeout(() => {
      dispatch(beersSearch(word, 1, 25));
    }, 2000);
  }, [word])

  const handlerSearch = e => {
    dispatch({type:BEERS_FILTER_NULL});
    setWord(e.target.value);
  }

  return {
    word, 
    handlerSearch,
  }
}

export default useSearch;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BEERS_FILTER_NULL, BEERS_FIRST_LETTER } from "../store/types/beers";
import { beersSearch } from '../store/action-creactors/beerDetails';
import { useEffect } from "react";

let time;

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
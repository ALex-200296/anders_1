import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchBeersSearch, fetchBeers, fetchBeersFilter } from '../store/action-creactors/beers';
import { BEERS_PAGE_LAST, BEERS_PAGE_NEXT } from "../store/types/beers";
import { beersPerPage } from '../store/action-creactors/beerDetails';

const useApi = () => { // useApi - слишком общее название, у нас тут скорее useBeers
  const  { 
    page, 
    perPage, 
    search, 
    filter,
  } = useSelector(state => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if(Object.keys(filter).length !== 0) {
      dispatch(fetchBeersFilter(filter, page, perPage));
    } else if(search) {
      dispatch(fetchBeersSearch(search, page, perPage));
    } else {
      dispatch(fetchBeers(page, perPage));
    }
    
  }, [page, perPage, search])

  const handlerPageLast = e => {
    dispatch({type: BEERS_PAGE_LAST})
  }

  const handlerPageNext = e => {
    dispatch({type: BEERS_PAGE_NEXT})
  }

  const handlePerPage = e => {
    dispatch(beersPerPage(e.target.value))
  }

  return {
    handlerPageLast,
    handlerPageNext,
    handlePerPage
  }
  
}

export default useApi;

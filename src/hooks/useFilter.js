import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filter_obj from '../lib/filter_obj';
import { fetchBeersFilter } from "../store/action-creactors/beers";
import { BEERS_FILTER } from "../store/types/beers";

export const useFilter = (ref) => {
  const [data, setData] = useState({});
  const { search } = useSelector( state => state.details);
  const dispath = useDispatch();
 
  useEffect(() => {
    ref.current.reset();
  }, [search])

  const handlerInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    const filterData = filter_obj(data);

    if(Object.keys(filterData).length !== 0) {
      dispath({type: BEERS_FILTER, filter: filterData});
      dispath(fetchBeersFilter(filterData, 1, 25));
    }

    ref.current.reset();
    setData({});
  }

  return {
    handlerInput,
    handlerSubmit
  }
}
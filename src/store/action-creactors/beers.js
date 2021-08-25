import axios from "axios";
import { FETCH_BEERS, FETCH_BEERS_ERROR, FETCH_BEERS_SUCCESS } from "../types/beers";

const { REACT_APP_BEERS } = process.env 

export const fetchBeers = (page = 1, per_page = 25) => {
  return async(dispatch) => {
    try {
      dispatch({type: FETCH_BEERS});
      const response = await axios.get(`${REACT_APP_BEERS}?page=${page}&per_page=${per_page}`);
      dispatch({
        type: FETCH_BEERS_SUCCESS, 
        beers: response.data,
      });
    } catch (e) {
      dispatch({type: FETCH_BEERS_ERROR});
    }
  }
}

export const fetchBeersSearch = (data, page = 1, per_page = 25) => {
  return async(dispatch) => {
    try {
      dispatch({type: FETCH_BEERS});
      const response = await axios.get(`${REACT_APP_BEERS}?page=${page}&per_page=${per_page}`, {
        params: {
          beer_name: data
        }
      })
      console.log(response.data)
      dispatch({
        type: FETCH_BEERS_SUCCESS, 
        beers: response.data,
      });
    } catch (e) {
      dispatch({type: FETCH_BEERS_ERROR});
    }
  }
}

export const fetchBeersFilter = (data, page = 1, per_page = 25) => {
  return async(dispatch) => {
    try {
      dispatch({type: FETCH_BEERS});
      const response = await axios.get(`${REACT_APP_BEERS}?page=${page}&per_page=${per_page}`, {
        params: {
          ...data
        }
      })
      console.log(response.data)
      dispatch({
        type: FETCH_BEERS_SUCCESS, 
        beers: response.data,
      });
    } catch (e) {
      dispatch({type: FETCH_BEERS_ERROR});
    }
  }
}
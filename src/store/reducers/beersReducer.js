import { FETCH_BEERS, FETCH_BEERS_ERROR, FETCH_BEERS_SUCCESS } from '../types/beers';

const initialState = {
  beers: [],
  loading: false,
  error: null,
}

export const beersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BEERS:
      return { 
        error: null, 
        loading: true, 
        beers: []
      }
    case FETCH_BEERS_SUCCESS:
      return {
        error: null, 
        loading: false, 
        beers: action.beers
      }  
    case FETCH_BEERS_ERROR: 
      return {
        loading: false, 
        error: action.payload, 
        beers: []
      }    
    default:
      return state
  }
};
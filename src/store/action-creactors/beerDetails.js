import { BEERS_PAGE_SEARCH, BEERS_PER_PAGE } from "../types/beers";


export const beersPerPage = (perPage) => {
  return dispatch => {
    try {
      dispatch({type: BEERS_PER_PAGE, perPage});
    }
    catch(e) {
      console.log(e)
    }
  }
}

export const beersSearch = (search, page, perPage) => {
  return dispatch => {
    try {
      dispatch({
        type: BEERS_PAGE_SEARCH,
        page,
        perPage,
        search,
      })
    } catch (e) {
      console.log(e)
    }
  }
} 
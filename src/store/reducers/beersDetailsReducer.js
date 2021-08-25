import { BEERS_FILTER, BEERS_FILTER_NULL, BEERS_FIRST_LETTER, BEERS_PAGE_LAST, BEERS_PAGE_NEXT, BEERS_PAGE_SEARCH, BEERS_PER_PAGE } from "../types/beers"

const initialState = {
  page: 1,
  perPage: 25,
  search: '',
  filter: {},
}

export const beersDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case BEERS_PAGE_NEXT:
      return {
        ...state,
        page: state.page + 1
      }
    case BEERS_PAGE_LAST:
      return {
        ...state,
        page: state.page - 1
      }
    case BEERS_PER_PAGE:
      return {
        ...state,
        perPage: action.perPage
      }
    case BEERS_PAGE_SEARCH:
      return {
        ...state,
        page: action.page,
        perPage: action.perPage,
        search: action.search
      }  
    case BEERS_FILTER_NULL:
      return {
        ...state,
        filter: {}
      }
    case BEERS_FILTER:
      return {
        ...state,
        filter: {
          ...action.filter
        },
        search: '',
      }
    default:
      return state  
  }
}


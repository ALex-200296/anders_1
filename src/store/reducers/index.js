import { combineReducers } from "redux";
import { beersDetailsReducer } from "./beersDetailsReducer";
import { beersReducer } from "./beersReducer";


export const rootReducer = combineReducers({
  beer: beersReducer,
  details: beersDetailsReducer,
});
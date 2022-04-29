import {combineReducers} from "redux";
import CounterReducer from "./counter.reducer";
export const reducers = combineReducers({
  counter: CounterReducer
});
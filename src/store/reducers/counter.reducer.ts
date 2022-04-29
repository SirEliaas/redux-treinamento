import { Action } from "redux";
import { CounterActionTypes } from "../actions";

const INITIAL_STATE = { value: 0 };
export default function(state = INITIAL_STATE, action: Action) {
  switch(action.type) {
    case CounterActionTypes.increment: {
      return { ...state, value: state.value + 1 };
    };

    case CounterActionTypes.decrement: {
      return { ...state, value: state.value - 1 };
    };

    default: {
      return state;
    };
  };
};
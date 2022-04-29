import { CounterActionTypes } from ".";

export const CounterActions = {
  increment: () => ({ type: CounterActionTypes.increment }),
  decrement: () => ({ type: CounterActionTypes.decrement }),
};
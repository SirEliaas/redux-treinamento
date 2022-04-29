import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "./store/actions/counter.action";
import "./styles.css";

export const Application: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter);

  return (
    <div>
      <h1>{counter?.value}</h1>
      <div id="button-container">
       <button onClick={() => dispatch(CounterActions.increment())}>INCREMENT</button>
       <button onClick={() => dispatch(CounterActions.decrement())}>DECREMENT</button>
      </div>
    </div>
  );
};
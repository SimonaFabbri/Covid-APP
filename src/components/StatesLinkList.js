import React from "react";
import { Link } from "react-router-dom";
import { states } from "../utils/states";

function StatesLinList() {
  return (
    <>
      {states.map((state, i) => (
        <li key={i}>
          <Link to={`/${state.code}`}>{state.name}</Link>
        </li>
      ))}
    </>
  );
}

export default StatesLinList;

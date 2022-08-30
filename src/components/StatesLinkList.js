import React, { useState } from "react";
import { Link } from "react-router-dom";
import { states } from "../utils/states";
import {
  containerStyleLi,
  StyleLi,
  styleLink,
  MouseOver,
  MouseOut,
} from "../pages/style";

function StatesLinList() {
  return (
    <div style={containerStyleLi}>
      {states.map((state, i) => (
        <li style={StyleLi} key={i}>
          <Link
            style={styleLink}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            to={`/${state.code}`}
          >
            {state.name}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default StatesLinList;

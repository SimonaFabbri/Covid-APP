import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { states } from "../utils/states";
import {
  containerStyleLi,
  StyleLi,
  styleLink,
  MouseOver,
  MouseOut,
  containerStyleLiMobile,
} from "../pages/style";
function StatesLinList() {
  const isMobile = useMediaQuery({ maxWidth: 660 });
  return (
    <div style={isMobile ? containerStyleLiMobile : containerStyleLi}>
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

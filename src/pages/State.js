import React from "react";
import {
  titleStyle,
  headerStyle,
  styleLink,
  MouseOver,
  MouseOut,
  onClick,
} from "./style";
import { Link, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Graph from "../components/Graph";
import { getState } from "../utils/api";
import StatesLinkList from "../components/StatesLinkList";

function Home() {
  const [graphData, setGraphData] = React.useState();
  const params = useParams();

  React.useEffect(() => {
    getData();
  });

  function getData() {
    getState(params.stateCode).then((res) => {
      setGraphData(res);
    });
  }

  const isMobile = useMediaQuery({ maxWidth: 660 });

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={titleStyle}>COVID TRACKER : {params.stateCode}</h1>
      </header>
      <Graph data={graphData} />
      <ul>
        <li>
          <Link
            style={styleLink}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            to="/"
          >
            BACK TO ALL STATES
          </Link>
        </li>
        <StatesLinkList />
      </ul>
    </div>
  );
}

export default Home;

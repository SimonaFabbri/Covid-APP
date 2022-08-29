import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useParams, useNavigate } from "react-router-dom";
import Graph from "../components/Graph";
import { getState } from "../utils/api";
import StatesLinkList from "../components/StatesLinkList";
//////////////////////// DISPLAY RESPONSIVE ////////////////////////

function Home(props) {
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
    <div style={styleBox}>
      <header style={{ backgroundColor: "#002b36" }}>
        <h1 style={titleStyle}>COVID TRACKER : {params.stateCode}</h1>
      </header>
      <Graph data={graphData} />
      <ul>
        <li>
          <Link to="/">BACK TO ALL STATES</Link>
        </li>
        <StatesLinkList />
      </ul>
    </div>
  );
}

export default Home;

//////////////////////// STYLES ////////////////////////
const styleBox = {};

const titleStyle = {
  color: "#fdf6e3",
  padding: "4px 12px",
};

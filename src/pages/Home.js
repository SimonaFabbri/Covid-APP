import React from "react";
import { useMediaQuery } from "react-responsive";
import Graph from "../components/Graph";
import { getGlobal } from "../utils/api";
import StatesLinList from "../components/StatesLinkList";
import { titleStyle, headerStyle } from "./style";

function Home() {
  const [graphData, setGraphData] = React.useState();

  React.useEffect(() => {
    getData();
  });

  function getData() {
    getGlobal().then((res) => {
      setGraphData(res);
    });
  }
 

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={titleStyle}>COVID TRACKER</h1>
      </header>
      <Graph data={graphData} />
      <ul>
        <StatesLinList />
      </ul>
    </div>
  );
}

export default Home;

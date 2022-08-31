import React from "react";
import Graph from "../components/Graph";
import { getGlobal } from "../utils/api";
import StatesLinList from "../components/StatesLinkList";
import { titleStyle, headerStyle, contenetStyle } from "./style";

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
      <div style={contenetStyle}>
        <Graph data={graphData} />
        <ul>
          <StatesLinList />
        </ul>
      </div>
    </div>
  );
}

export default Home;

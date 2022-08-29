import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Graph from "../components/Graph";
import SearchContext from "../SearchContext";
import { getGlobal, getState } from "../utils/api";

import StatesLinList from "../components/StatesLinkList";

//////////////////////// DISPLAY RESPONSIVE ////////////////////////

function Home(props) {
  const searchQuery = useContext(SearchContext);
  const [queryInput, setQueryInput] = React.useState(searchQuery);
  const [graphData, setGraphData] = React.useState();
  const [error, setError] = React.useState("");
  const [searchSubmitted, setSearchSubmitted] = React.useState(false);
  // TODO: Aggiungere uno stato per controllare la ricerca

  React.useEffect(() => {
    getData();
  });

  function getData() {
    // getState("TX").then((res) => {
    //   setGraphData(res);
    // });
    getGlobal().then((res) => {
      setGraphData(res);
    });
  }
  const isMobile = useMediaQuery({ maxWidth: 660 });

  return (
    <div style={styleBox}>
      <header style={{ backgroundColor: "#002b36" }}>
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

//////////////////////// STYLES ////////////////////////
const styleBox = {};

const titleStyle = {
  color: "#fdf6e3",
  padding: "4px 12px",
};

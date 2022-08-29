import React from "react";

const styleButton = {
  border: "solid 1px black",
  height: "60px",
  marginLeft: "30px",
  borderRadius: "10px",
};

function SearchButton(props) {
  return <button style={styleButton}>Search</button>;
}

export default SearchButton;

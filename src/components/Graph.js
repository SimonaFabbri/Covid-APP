import React, { useContext } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Area,
  ComposedChart,
  CartesianGrid,
  Label,
} from "recharts";

function Graph({ data }) {
  return (
    <div style={graphStyle}>
      <ResponsiveContainer width="90%" height="100%" minHeight="600px">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <Label />
          <YAxis scale="sqrt" />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="positiveIncrease" stroke="#dc322f" />
          <Line type="linear" dataKey="negativeIncrease" stroke="#268bd2" />
          <Line type="linear" dataKey="hospitalizedIncrease" stroke="#cb4b16" />
          <Line type="linear" dataKey="inIcuCurrently" stroke="#b58900" />
          <Line
            type="linear"
            dataKey="onVentilatorCurrently"
            stroke="#2aa198"
          />
          <Line type="linear" dataKey="deathIncrease" stroke="#002b36" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;

/// STYLE
const graphStyle = {
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

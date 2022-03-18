import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
} from "recharts";

const data = [
  {
    time: "6:00am",
    temp: 13,
  },
  {
    time: "10:00am",
    temp: 24,
  },
  {
    time: "2:00pm",
    temp: 31,
  },
  {
    time: "6:00pm",
    temp: 27,
  },
  {
    time: "10:00pm",
    temp: 22,
  },
];

const Chart = () => (
  <ResponsiveContainer width="95%" aspect={3}>
    <LineChart data={data}>
      <XAxis dataKey="time" tick={{ fill: "#fff" }} />
      <YAxis />
      <Tooltip
        contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
        itemStyle={{ color: "#fff" }}
      />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#8884d8"
        strokeWidth="2"
        dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 3, r: 3 }}
        activeDot={{
          fill: "#2e4355",
          stroke: "#8884d8",
          strokeWidth: 3,
          r: 3,
        }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;

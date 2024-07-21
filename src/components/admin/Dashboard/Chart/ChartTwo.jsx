import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    Data: 180,
  },
  {
    Data: 100,
  },
  {
    Data: 50,
  },
  {
    Data: 70,
  },
  {
    Data: 130,
  },
  {
    Data: 250,
  },
  {
    Data: 200,
  },
];

export default class ChartTwo extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <h1 className="text-bold px-10 pb-2">Prasarana Air Bersih</h1>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="Data"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Data" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

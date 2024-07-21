import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataDummy = [
  {
    Data: -80,
  },
  {
    Data: -40,
  },
  {
    Data: -90,
  },
  {
    Data: 60,
  },
  {
    Data: -10,
  },
  {
    Data: 20,
  },
  {
    Data: -100,
  },
];

export default class ChartOne extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <h1 className="text-bold px-10 pb-2">Jumlah Penduduk</h1>
        <LineChart
          width={500}
          height={280}
          data={dataDummy}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Data"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

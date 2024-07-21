import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Dusun 1",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Dusun 2",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Dusun 3",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Dusun 4",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Dusun 5",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Dusun 6",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class ChartFour extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <h1 className="text-bold px-10 pb-2">Jumlah Penduduk Tiap Dusun</h1>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar dataKey="A" stroke="#8884d8" fillOpacity={0} />
          <Radar dataKey="B" stroke="#82ca9d" fillOpacity={0} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

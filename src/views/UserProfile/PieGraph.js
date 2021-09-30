import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function PieGraph(props) {
const COLORS = ["#04abc1", "#4caf4f", "#FF4444", "#FF8042"];
const income = Number(props.income);
const contributions = Number(props.contributions);
const expenses = Number(props.expenses);
const spending = Number(props.spending);
const data = [
  { name: "Contributions", value: contributions},
  { name: "Left Over!", value: spending},
  { name: "Expense", value: expenses},

];
console.log(data)
const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }, any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <ResponsiveContainer width={410} height={500} style={{display: "flex", justifyContent: "center"}}>
    <PieChart width={800} height={800}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip/>
    </PieChart>
    </ResponsiveContainer>
  );
}

export default PieGraph;


  

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Oct", income: 60, expanses: 40 },
  { month: "Nov", income: 25, expanses: 22 },
  { month: "Dec", income: 45, expanses: 57 },
  { month: "Jan", income: 17, expanses: 5 },
  { month: "Feb", income: 33, expanses: 19 },
];

function BalanceBarChart() {
  return (
    <ResponsiveContainer>
      <BarChart data={data} style={{ left: "0" }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="var(--color-primary-600)" />
        <Bar dataKey="expanses" fill="var(--color-primary-300)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BalanceBarChart;

import { Area, AreaChart, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "balance", value: 0 },
//   { name: "balance", value: 2 },
//   { name: "balance", value: 5 },
//   { name: "balance", value: 3 },
//   { name: "balance", value: 2 },
//   { name: "balance", value: 20 },
//   { name: "balance", value: 2 },
// ];

const data = [
  { month: "Oct", income: 0 },
  { month: "Nov", income: 20 },
  { month: "Dec", income: 100 },
  { month: "Jan", income: 10 },
  { month: "Feb", income: 15 },
];

function BalanceLineChart() {
  return (
    <ResponsiveContainer height={20}>
      <AreaChart data={data}>
        <Area
          type="monotone"
          dataKey="income"
          stroke="var(--color-primary-600)"
          fillOpacity={1}
          fill="#fff"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default BalanceLineChart;

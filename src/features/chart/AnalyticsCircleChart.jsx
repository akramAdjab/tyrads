import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";

import Row from "../../ui/Row";

const StyledAnalyticsCircleChart = styled.div`
  height: 60%;
  margin-top: auto;

  position: relative;

  & .analytics-percentage {
    font-size: var(--text-6);

    gap: 2px;

    transform: translate(-50%, -50%);
    position: absolute;
    top: calc(50%);
    left: 50%;
  }
`;

const StyledRow = styled(Row)`
  width: 65%;
  margin: 0 auto;

  & p {
    font-size: var(--text-1);

    display: flex;
    align-items: center;
    gap: 4px;
  }

  & p span {
    width: var(--space-1);
    height: var(--space-1);
    border-radius: 50%;
    display: inline-block;
  }

  & .circle-1 {
    background-color: var(--color-primary-600);
  }
  & .circle-2 {
    background-color: var(--color-tertiary-400);
  }
  & .circle-3 {
    background-color: var(--color-secondary-400);
  }
`;

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = [
  "var(--color-primary-600)",
  "var(--color-tertiary-400)",
  "var(--color-secondary-400)",
  "var(--color-grey-300)",
];

function AnalyticsCircleChart() {
  return (
    <>
      <StyledAnalyticsCircleChart>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              cy={100}
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius={85}
              outerRadius={105}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <Row $direction="column" className="analytics-percentage text-center">
          <p className="text-semibold text-dark">75%</p>
          <p className="text-light text-small">Done</p>
        </Row>
      </StyledAnalyticsCircleChart>

      <StyledRow $align="center" $justify="space-between">
        <p className="text-light">
          <span className="circle-1"></span> Done
        </p>
        <p className="text-light">
          <span className="circle-2"></span> In progress
        </p>
        <p className="text-light">
          <span className="circle-3"></span> To do
        </p>
      </StyledRow>
    </>
  );
}

export default AnalyticsCircleChart;

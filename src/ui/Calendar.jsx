import styled from "styled-components";

const Time = styled.p`
  color: var(--color-grey-950);
  margin-bottom: var(--space-1);
  font-size: var(--text-5);
  font-weight: var(--weight-3);
`;

const Date = styled.p`
  color: var(--color-grey-400);
  font-size: var(--text-2);
`;

function Calendar({ time, date }) {
  return (
    <div>
      <Time>{time}</Time>
      <Date>{date}</Date>
    </div>
  );
}

export default Calendar;

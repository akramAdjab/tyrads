import Row from "../../ui/Row";

function ExpansesIncomeItem({ item }) {
  const { type, percentage, rate } = item;

  return (
    <Row
      $direction="column"
      $gap={1}
      style={type === "income" ? { textAlign: "right" } : {}}
    >
      <p className="text-semibold" style={{ textTransform: "capitalize" }}>
        {type}
      </p>
      <p className="text-dark text-medium ">{percentage}%</p>
      <p className="text-small text-light">{rate}</p>
    </Row>
  );
}

export default ExpansesIncomeItem;

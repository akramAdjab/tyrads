import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Messages from "./Messages";
import styled from "styled-components";
import MessageInput from "./MessageInput";

const StyledRow = styled(Row)`
  padding: var(--space-5);

  flex-basis: 42%;

  & h4 {
    margin-bottom: var(--space-8);
  }
`;

function Chat() {
  return (
    <StyledRow $direction="column">
      <Heading as="h4">Esther Howard</Heading>
      <Messages />
      <MessageInput />
    </StyledRow>
  );
}

export default Chat;

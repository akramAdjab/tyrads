import styled from "styled-components";
import Button from "../../ui/Button";
import { FiPaperclip, FiSmile } from "react-icons/fi";

const StyledMessageInput = styled.div`
  margin-top: auto;

  padding: var(--space-3) var(--space-2);
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-100);

  display: grid;
  grid-template-columns: auto auto 1fr;
  column-gap: var(--space-1);
  row-gap: var(--space-5);

  & input {
    border: none;
    background-color: transparent;

    grid-column: 1/-1;

    &::placeholder {
      color: var(--color-grey-400);
    }
  }

  & button:last-of-type {
    justify-self: end;
  }
`;

function MessageInput() {
  return (
    <StyledMessageInput>
      <input type="text" placeholder="Type your message" />

      <Button $variation="simple" $size="xsmall">
        <FiSmile />
      </Button>
      <Button $variation="simple" $size="xsmall">
        <FiPaperclip />
      </Button>
      <Button $size="small">Send now</Button>
    </StyledMessageInput>
  );
}

export default MessageInput;

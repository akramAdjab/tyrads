import { useState } from "react";
import styled, { css } from "styled-components";

import Row from "../../ui/Row";
import Avatar from "../../ui/Avatar";

const ChatMessages = styled.div`
  height: auto;

  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
`;

const Message = styled(Row)`
  width: 60%;

  align-items: center;
  gap: var(--space-1);

  ${(props) =>
    props.$person === "me"
      ? css`
          justify-self: end;
          justify-content: flex-end;
        `
      : css`
          /* justify-self: start; */
        `}

  & p {
    padding: var(--space-3) var(--space-2);
  }
`;

const OwnMessage = styled.p`
  color: var(--color-primary-50);
  border-radius: var(--border-radius-lg);
  border-bottom-right-radius: 0;
  background-color: var(--color-primary-600);
`;

const OtherMessage = styled.p`
  border-radius: var(--border-radius-lg);
  border-bottom-left-radius: 0;
  background-color: var(--color-grey-100);
`;

function Messages() {
  const [messages] = useState([
    { person: "me", message: "Are you ready?" },
    { person: "other", message: "I have prepared everything" },
  ]);

  return (
    <ChatMessages>
      {messages.map((message, i) => {
        return (
          <Message $person={message.person} key={i}>
            {message.person === "me" ? (
              <>
                <OwnMessage>{message.message}</OwnMessage>
                <Avatar
                  $width={10}
                  src="/current-user.webp"
                  alt="John Demon image"
                />
              </>
            ) : (
              <>
                <Avatar
                  $width={10}
                  src="/other-user.webp"
                  alt={`John Demon friends' image`}
                />
                <OtherMessage>{message.message}</OtherMessage>
              </>
            )}
          </Message>
        );
      })}
    </ChatMessages>
  );
}

export default Messages;

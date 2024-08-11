import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const ChatWindowContainer = styled.div`
  width: 75%;
  padding: 20px;
`;

const ChatWindow = ({ messages }) => (
  <ChatWindowContainer>
    {messages.map((message) => (
      <Message key={message.id} message={message} />
    ))}
  </ChatWindowContainer>
);

export default ChatWindow;

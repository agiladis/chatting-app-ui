import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  margin-bottom: 10px;
  text-align: ${(props) => (props.isSender ? 'right' : 'left')};
`;

const MessageBubble = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.isSender ? '#DCF8C6' : '#FFF')};
`;

const Message = ({ message }) => (
  <MessageContainer isSender={message.isSender}>
    <MessageBubble isSender={message.isSender}>{message.content}</MessageBubble>
  </MessageContainer>
);

export default Message;

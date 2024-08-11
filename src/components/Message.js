import React from 'react';
import styled, { css } from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: ${(props) => (props.isAdmin ? 'flex-end' : 'flex-start')};
`;

const Sender = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  ${(props) =>
    props.isAdmin &&
    css`
      text-align: right;
    `}
`;

const MessageText = styled.div`
  background-color: ${(props) => (props.isAdmin ? '#4CAF50' : '#f1f1f1')};
  color: ${(props) => (props.isAdmin ? 'white' : 'black')};
  padding: 10px;
  border-radius: 5px;
  max-width: 60%;
  ${(props) =>
    props.isAdmin &&
    css`
      border-top-right-radius: 0;
    `}
  ${(props) =>
    !props.isAdmin &&
    css`
      border-top-left-radius: 0;
    `}
`;

const Message = ({ message }) => {
  const isAdmin = message.sender === 'admin@mail.com';
  return (
    <MessageContainer isAdmin={isAdmin}>
      {!isAdmin && <Sender>{message.sender}</Sender>}
      <MessageText isAdmin={isAdmin}>{message.message}</MessageText>
    </MessageContainer>
  );
};

export default Message;

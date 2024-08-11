import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const ChatPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ChatPage = ({ users, chats, messages }) => (
  <ChatPageContainer>
    <Sidebar users={users} chats={chats} />
    <ChatWindow messages={messages} />
  </ChatPageContainer>
);

export default ChatPage;

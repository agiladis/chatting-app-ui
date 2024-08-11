import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const ChatPageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const BlankContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ccc;
`;

const HamburgerButton = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  left: ${(props) => (props.isSidebarVisible ? '0' : '-100%')};
  transition: left 0.3s ease;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    position: static;
    width: 25%;
    left: 0;
  }
`;

const ChatPage = ({
  rooms,
  selectedRoom,
  onRoomSelect,
  isSidebarVisible,
  toggleSidebar,
}) => (
  <ChatPageContainer>
    <HamburgerButton onClick={toggleSidebar}>☰</HamburgerButton>
    <SidebarWrapper isSidebarVisible={isSidebarVisible}>
      <Sidebar rooms={rooms} onRoomSelect={onRoomSelect} />
    </SidebarWrapper>
    {selectedRoom ? (
      <ChatWindow room={selectedRoom} />
    ) : (
      <BlankContainer>Select a chat room to start messaging</BlankContainer>
    )}
  </ChatPageContainer>
);

export default ChatPage;

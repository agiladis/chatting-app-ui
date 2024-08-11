import React from 'react';
import styled from 'styled-components';
import UserStatus from './UserStatus';

const SidebarContainer = styled.div`
  width: 25%;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px;
`;

const Sidebar = ({ users, chats }) => (
  <SidebarContainer>
    <h2>Chats</h2>
    {chats.map((chat) => (
      <div key={chat.id}>{chat.name}</div>
    ))}
    <h2>Users</h2>
    {users.map((user) => (
      <UserStatus key={user.id} user={user} />
    ))}
  </SidebarContainer>
);

export default Sidebar;

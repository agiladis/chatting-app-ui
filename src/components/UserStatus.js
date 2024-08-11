import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.user.role === 0 ? 'green' : 'red')};
  margin-right: 10px;
`;

const UserStatus = ({ user }) => (
  <UserContainer>
    <p>check</p>
    <StatusDot user={user} />
    <span>{user.name}</span>
  </UserContainer>
);

export default UserStatus;

import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const RoomContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #a9a9a973;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Sidebar = ({ rooms, onRoomSelect }) => (
  <SidebarContainer>
    {rooms.map((room) => (
      <RoomContainer key={room.id} onClick={() => onRoomSelect(room)}>
        <ProfileImage src={room.image_url} alt={room.name} />
        <span>{room.name}</span>
      </RoomContainer>
    ))}
  </SidebarContainer>
);

export default Sidebar;

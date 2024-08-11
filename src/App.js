import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import ChatPage from './pages/ChatPage';
import { chatResponse } from './data/chatResponse';

const App = () => {
  const { rooms } = chatResponse.results;
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setIsSidebarVisible(false); // Hide sidebar on mobile when a room is selected
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ChatPage
                rooms={rooms}
                selectedRoom={selectedRoom}
                onRoomSelect={handleRoomSelect}
                isSidebarVisible={isSidebarVisible}
                toggleSidebar={toggleSidebar}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

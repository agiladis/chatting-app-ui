import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Message from './Message';

const ChatWindowContainer = styled.div`
  max-width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 75%;
  }
`;

const Headbar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ChatWindow = ({ room }) => {
  const [messages, setMessages] = useState(room.comments);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    setMessages(room.comments);
  }, [room]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObject = {
        id: messages.length + 1,
        type: 'text',
        message: newMessage,
        sender: 'admin@mail.com', // Assuming the sender is the admin for simplicity
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage('');
    }
  };

  return (
    <ChatWindowContainer>
      <Headbar>
        <ProfileImage src={room.image_url} alt={room.name} />
        <span>{room.name}</span>
      </Headbar>
      <MessagesContainer>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type here..."
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </InputContainer>
    </ChatWindowContainer>
  );
};

export default ChatWindow;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import ChatPage from './pages/ChatPage';

const App = () => {
  const users = [
    { id: 1, name: 'Ridwan', online: true },
    { id: 2, name: 'Agent', online: false },
  ];

  const chats = [{ id: 1, name: 'Group Bakalan-Bakalan' }];

  const messages = [
    { id: 1, content: 'Hello, how can I help you?', isSender: true },
    { id: 2, content: 'I need assistance with my account.', isSender: false },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <ChatPage users={users} chats={chats} messages={messages} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;

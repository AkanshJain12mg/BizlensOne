import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Home } from './pages/Home';
import { Client } from './pages/Client';
import { ClientDashboard } from './pages/ClientDashboard';
import { User } from './pages/User';
import { UserClientView } from './pages/UserClientView';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<Client />} />
            <Route path="/client/dashboard" element={<ClientDashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/viewbyewind" element={<UserClientView clientId="ByeWind" />} />
            <Route path="/user/viewthreadup" element={<UserClientView clientId="ThreadUp" />} />
            <Route path="/user/viewmounji" element={<UserClientView clientId="Mounji" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
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
            <Route path="/user/viewclientA" element={<UserClientView />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
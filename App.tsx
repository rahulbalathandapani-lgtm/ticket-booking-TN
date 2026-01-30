import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import { BookingFlow } from './components/BookingFlow';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={
        <ProtectedRoute>
          <BookingFlow />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;

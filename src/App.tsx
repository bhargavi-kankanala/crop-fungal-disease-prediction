import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { AnimatePresence } from 'framer-motion';

// Pages
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DiseaseAnalysis from './pages/DiseaseAnalysis';
import Education from './pages/Education';
import Encyclopedia from './pages/Encyclopedia';
import NotFound from './pages/NotFound';

// Components
import ProtectedRoute from './components/auth/ProtectedRoute';
import VirtualAssistant from './components/VirtualAssistant';

function App() {
  const { user } = useAuth();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/" />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/disease/:id" element={<DiseaseAnalysis />} />
            <Route path="/education" element={<Education />} />
            <Route path="/encyclopedia" element={<Encyclopedia />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <VirtualAssistant />
    </>
  );
}

export default App;
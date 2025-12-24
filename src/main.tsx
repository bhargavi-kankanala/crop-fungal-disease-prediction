import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { DiseaseProvider } from './contexts/DiseaseContext';
import './i18n';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DiseaseProvider>
          <App />
        </DiseaseProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
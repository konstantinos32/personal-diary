import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './App.jsx';
import EntriesStates from './context/EntriesStates.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntriesStates>
      <App />
    </EntriesStates>
  </StrictMode>
);
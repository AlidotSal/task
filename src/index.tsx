import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init } from './init.ts';

const rootEl = document.getElementById('root');
if (rootEl) {
  init();
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './core/App';
import './index.scss';

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

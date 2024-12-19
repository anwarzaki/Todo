import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

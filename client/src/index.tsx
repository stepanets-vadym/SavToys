import { BrowserRouter as Router } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import { setupStore } from 'store/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#74ccd8" highlightColor="#fff">
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </SkeletonTheme>
  </React.StrictMode>
);

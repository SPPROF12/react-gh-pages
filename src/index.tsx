import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Attempt to render the App component, and log any errors to the console
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  (error) => {
    if (error) {
      console.error('Error rendering the App component:', error);
    }
  }
);

// If reportWebVitals is defined, log performance metrics
if (reportWebVitals) {
  reportWebVitals();
}

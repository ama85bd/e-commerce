import React from 'react';
import ReactDOM from 'react-dom';
import './app/sass/styles.css';
import './app/lineaIcon/icon-font.css';
import App from './app/layouts/App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/lato';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

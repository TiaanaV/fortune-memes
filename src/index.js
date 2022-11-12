import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reducers/redux-store';
import { connect, Provider } from "react-redux";
import {getRandomMeme } from './reducers/memeReducer';


const mapStateToProps = (state) => {
  return {
    memesSection:state.memesSection,
  }
};

const AppContainer =  connect(mapStateToProps,{getRandomMeme})(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
   </Provider>
  </React.StrictMode>
);

reportWebVitals();

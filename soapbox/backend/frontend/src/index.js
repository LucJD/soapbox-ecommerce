import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById("root"));
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('sk_test_51NehWPJEf7VDPp6AtCb0LKiTWOUQw8TCq352t25zybV78LGlVlTyiTsn2pAeNnZR6jKC5bxittSuZ5rbI66Mde9200WtUASyNy')



const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> 7691c488c50ed637ee2d72b681a6418b5a1897fb
root.render(
  <Elements stripe = {stripePromise}>
    <Provider store={store}>
    <App />
  </Provider>
  </Elements>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import {Provider} from "react-redux"
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slice/todoslice'


const store=configureStore({reducer:{todoSlice}})

ReactDOM.render(
  <Provider store={store}>
 <App />
 </Provider>,
 
  document.getElementById('root')
);



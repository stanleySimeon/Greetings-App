import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import axios from 'axios';
const API = 'http://localhost:3000/api/v1/messages';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export const getMessages = () => async (dispatch) => {
  await axios.get(API,{
    headers: {
      'method': 'GET',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }).then((response) => {
    dispatch({
      type: 'FETCH_MESSAGES',
      payload: response.data,
    });
  })
};

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: messagesReducer,
}, applyMiddleware(thunk));

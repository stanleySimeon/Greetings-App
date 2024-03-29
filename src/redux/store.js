import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import axios from 'axios';
const API = 'https://rails-w6v1.onrender.com/api/v2/messages';

export const GET_MESSAGES = 'FETCH_MESSAGES';

export const getMessages = () => async (dispatch) => {
  await axios.get(API,{
    headers: {
      'method': 'GET',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }).then((response) => {
    dispatch({
      type: 'GET_MESSAGES',
      payload: response.data,
    });
  })
};

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.payload;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: messagesReducer,
}, applyMiddleware(thunk));

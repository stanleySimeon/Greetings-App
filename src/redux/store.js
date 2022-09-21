import thunk from 'redux-thunk';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessages = () => async (dispatch) => {
    await axios.get('http://localhost:3000/api/v1/messages',{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    })
    .then(response => {
        console.log(response);
        dispatch(fetchMessages(response.data));
    })
    .catch(error => {
        console.log(error);
    });
};

const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MESSAGES':
            return action.payload;
        default:
            return state;
    }
}

export const store = configureStore({
    reducer: messagesReducer,
}, applyMiddleware(thunk));

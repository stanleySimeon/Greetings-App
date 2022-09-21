import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../redux/store';

const Greetings = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state).message;

    useEffect(() => {
        dispatch(fetchMessages());
    }, []);

    return (
      <h1>{messages}</h1>
    );
};

export default Greetings;


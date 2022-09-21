import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/store';
import '../App.css';

const Greetings = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state).message;
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <div className='container'>
      <button type="button" onClick={() => dispatch(getMessages())}>
        Fetch messages
      </button>
      {greetings?.map((greeting) => (
        <div key={greeting.id}>
          <h1>{greeting.message}</h1>
        </div>
      ))};
      {greetings?.length === 0 && <h1>No messages</h1>}
    </div>
  );
};

export default Greetings;

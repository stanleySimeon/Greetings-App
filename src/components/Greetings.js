import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../redux/store';

const Greetings = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <>
      <div className='card w-full md:w-8/12 m-auto h-80 md:h-80 min-h-48 bg-slate-200 flex flex-col items-center rounded-md pt-2 px-2 pb-0 shadow-md'>
        <span className='w-full py-2 mb-4 border-b border-purple'>
          <h1 className="text-3xl font-bold text-black text-center">Greetings</h1>
        </span>
        <span className='card-body flex flex-col justify-center w-full h-48 md:h-48 mb-2 p-0 text-center'>
          <p className='text-md md:text-xl'> {greetings} </p>
        </span>
        <button type="button" className="text-mySpend w-full shadow-md py-4 text-xl mb-2 user-select-none -webkit-user-select-none" onClick={() => dispatch(getMessages())}>Refresh</button>
      </div>
    </>
  );
};
export default Greetings;

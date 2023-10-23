import React, { ReactElement, useEffect } from 'react';

import { fetchTodo } from './store/fetchSlice';
import { useAppDispatch, useAppSelector } from './store';

import './App.css';

const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const todos = useAppSelector((state) => state.data);

  return (
    <div className="App">
      <p>{JSON.stringify(todos).toString()}</p>
    </div>
  );
};

export default App;

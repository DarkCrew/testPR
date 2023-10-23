import React, { ReactElement, useEffect } from 'react';

import Table from '../../components/Table/Table';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchTodo } from '../../store/fetchSlice';

import styles from './MainPage.module.scss';

const MainPage = (): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const todos = useAppSelector((state) => state.data);

  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <Table todos={todos.flat()} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;

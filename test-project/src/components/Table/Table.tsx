import React, { ReactElement } from 'react';

import { Data } from '../../store/fetchSlice';
import TableRow, { exampleArr } from '../TableRow/TableRow';

import styles from './Table.module.scss';

type TableProps = {
  todos: Data[];
};

const Table = (props: TableProps): ReactElement => {
  const { todos } = props;

  return (
    <table>
      <thead className={styles.headTable}>
        <tr>
          {exampleArr.map((elem) => (
            <th>{elem.propName}</th>
          ))}
        </tr>
      </thead>
      {todos.map((elem) => (
        <TableRow todo={elem} />
      ))}
    </table>
  );
};

export default Table;

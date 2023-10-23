import React, { ReactElement } from 'react';

import { Data } from '../../store/fetchSlice';
import TableRow, { exampleArr, preferredOrderObject } from '../TableRow/TableRow';

import styles from './Table.module.scss';

type TableProps = {
  todos: Data[];
};

const Table = (props: TableProps): ReactElement => {
  const { todos } = props;
  const sortedObject = preferredOrderObject(todos[0], exampleArr);

  return (
    <table>
      <thead className={styles.headTable}>
        <tr>
          {Object.keys(sortedObject).map((elem) => (
            <th>{elem}</th>
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

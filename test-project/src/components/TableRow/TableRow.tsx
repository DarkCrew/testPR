/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-prototype-builtins */
import React, { ReactElement } from 'react';

import { Data } from '../../store/fetchSlice';

import styles from './TableRow.module.scss';

type TableRowProps = {
  todo: Data;
};

type exampleArrType = {
  propName: string;
  converter?: ((val: boolean) => string) | undefined;
};

export const exampleArr: exampleArrType[] = [
  {
    propName: 'completed',
    converter: (val: boolean): string => {
      return val === true ? 'completed' : 'uncompleted';
    },
  },
  { propName: 'title' },
  { propName: 'userId' },
];

const TableRow = (props: TableRowProps): ReactElement => {
  const { todo } = props;

  return (
    <tbody>
      <tr className={styles.row}>
        {exampleArr.map((elem) =>
          elem.converter ? (
            <td className={styles.rowElem}>{elem.converter(todo.completed)}</td>
          ) : (
            <td className={styles.rowElem}>{todo[elem.propName as keyof typeof todo]}</td>
          )
        )}
      </tr>
    </tbody>
  );
};

export default TableRow;

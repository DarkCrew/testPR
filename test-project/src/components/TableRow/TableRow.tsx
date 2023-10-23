/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-prototype-builtins */
import React, { ReactElement } from 'react';

import { Data } from '../../store/fetchSlice';

import styles from './TableRow.module.scss';

type TableRowProps = {
  todo: Data;
};

export const exampleArr = ['completed', 'title', 'userId'];

// export function preferredOrderObject(obj: object, orderArray: string[]): object {
//   const newObj = {};
//   for (let i = 0; i < exampleArr.length; i += 1) {
//     if (obj.hasOwnProperty(orderArray[i])) {
//       newObj[orderArray[i]] = obj[orderArray[i]];
//     }
//   }
//   return newObj;
// }

const TableRow = (props: TableRowProps): ReactElement => {
  const { todo } = props;

  //   const sortedObject = preferredOrderObject(todo, exampleArr);

  return (
    <tbody>
      <tr className={styles.row}>
        {Object.keys(todo).map((elem) =>
          elem === 'completed' ? (
            todo[elem as keyof typeof todo] === true ? (
              <td className={styles.rowElem}>Completed</td>
            ) : (
              <td className={styles.rowElem}>Uncompleted</td>
            )
          ) : (
            <td className={styles.rowElem}>{String(todo[elem as keyof typeof todo])}</td>
          )
        )}
      </tr>
    </tbody>
  );
};

export default TableRow;

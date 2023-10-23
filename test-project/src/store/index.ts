/* =============== using example ===============
 * const dispatch = useAppDispatch(); выплюнули генерируем event
 * const todos = useAppSelector(state => state.todos.list); получаем данные
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import fetchExampleSlice from './fetchSlice';

const store = configureStore({ reducer: fetchExampleSlice });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

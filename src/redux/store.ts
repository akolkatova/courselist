import { createStore } from 'redux';
import { coursesReducer } from './reducers/courses-reducer';

export type StoreType = {
  reducer: {
    currentTime: number;
  };
};

export const store = createStore(coursesReducer);

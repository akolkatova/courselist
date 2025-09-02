import { createStore } from 'redux';
import { coursesReducer } from './reducers/courses-reducer';

export const store = createStore(coursesReducer);

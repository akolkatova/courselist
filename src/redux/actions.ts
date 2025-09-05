import { ICourse, IUser } from '../types';

export const CourseActionType = {
  SET_COURSES: 'SET_COURSES',
  PURCHASE_COURSE: 'PURCHASE_COURSE',
  SET_CURRENT_VIDEO: 'SET_CURRENT_VIDEO',
  LOGIN_ACTION: 'LOGIN_ACTION',
  LOGOUT_ACTION: 'LOGOUT_ACTION',
} as const;

export const SET_COURSES = 'SET_COURSES';
export const PURCHASE_COURSE = 'PURCHASE_COURSE';
export const SET_CURRENT_VIDEO = 'SET_CURRENT_VIDEO';
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export const setCourses = (courses: ICourse[]) => ({
  type: SET_COURSES,
  payload: courses,
});

export const purchaseCourse = (courseId: string) => ({
  type: PURCHASE_COURSE,
  payload: courseId,
});

export const setCurrentVideo = (url: ICourse | null) => ({
  type: SET_CURRENT_VIDEO,
  payload: url,
});

export const loginAction = (user: IUser | null) => ({
  type: LOGIN_ACTION,
  payload: user,
});

export const logoutAction = () => ({
  type: LOGOUT_ACTION,
});

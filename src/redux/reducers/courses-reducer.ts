import { AppState, ICourse } from '../../types';
import { CourseActionType } from '../actions';

const initState: AppState = {
  courses: [],
  purchased: [],
  current: null,
  user: null,
};

export const coursesReducer = (
  state = initState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any,
) => {
  switch (action.type) {
    case CourseActionType.SET_COURSES: {
      const courses = Object.values(action.payload);
      courses.filter((el) => ("courseId" in <ICourse>el));
      return { ...state, courses: action.payload };
    }
    case CourseActionType.PURCHASE_COURSE: {
      return { ...state, purchased: [...state.purchased, action.payload] };
    }
    case CourseActionType.SET_CURRENT_VIDEO: {
      return { ...state, current: action.payload };
    }
    case CourseActionType.LOGIN_ACTION: {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    }
    case CourseActionType.LOGOUT_ACTION: {
      localStorage.removeItem('user');
      return { ...state, user: null };
    }
    default: {
      return state;
    }
  }
};

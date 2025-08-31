export const CourseActionType = {
  BUY: 'BUY',
  SAVE: 'SAVE',
} as const;

export const coursesReducer = (
  state = { currentTime: 0 },
  action: { type: keyof typeof CourseActionType },
) => {
  switch (action.type) {
    case CourseActionType.BUY: {
      return { currentTime: 0 };
    }
    case CourseActionType.SAVE: {
      return { currentTime: 0 };
    }
    default: {
      return state;
    }
  }
};

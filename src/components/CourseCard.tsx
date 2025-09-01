import React from 'react';
import { ICourse } from '../types';
import { useDispatch } from 'react-redux';
import { purchaseCourse, viewCourse } from '../utils';

type Props = {
  courseItem: ICourse;
};

export const CourseCard = ({ courseItem }: Props) => {
  const dispatch = useDispatch();
  const purchasedCourses: ICourse[] = []; // store
  const isPurchased = purchasedCourses.find((el) => el.courseId === courseItem.courseId);

  return (
    <div className="course-card" key={courseItem.courseId}>
      <img className="card__image" src="../src/img/preview.png"></img>
      <div className="card__content">
        <div className="card__title">TITLE: {courseItem.title}</div>
        <div className="card__text">{courseItem.description}</div>
        <video src={courseItem.videoUrl}></video>
        <div>PRICE: ${courseItem.price}</div>
        {isPurchased ? (
          <input
            className="action-button"
            type="button"
            value="VIEW COURSE"
            onClick={() => {
              dispatch(viewCourse(courseItem.courseId) as never);
            }}
          ></input>
        ) : (
          <input
            className="action-button"
            type="button"
            value="BUY COURSE"
            onClick={() => {
              dispatch(purchaseCourse(courseItem.courseId) as never);
            }}
          ></input>
        )}
      </div>
    </div>
  );
};

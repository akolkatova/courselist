import React from 'react';
import './CourseCard.css';
import { AppState, ICourse } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseCourse, setCurrentVideo } from '../redux/actions';

type Props = {
  courseItem: ICourse;
};

export const CourseCard = ({ courseItem }: Props) => {
  const dispatch = useDispatch();
  const purchasedCourses: string[] = useSelector((state: AppState) => state.purchased);
  const isPurchased = purchasedCourses.find((el) => el === courseItem.courseId);

  const handlePurchase = (courseId: string) => {
    dispatch(purchaseCourse(courseId));
  };

  const handlePlay = (courseId: string) => {
    dispatch(setCurrentVideo(courseId));
  };

  return (
    <div className="course-card" key={courseItem.courseId}>
      <div className="card__content">
        <div className="card__title">{courseItem.title}</div>
        <div className="card__text">{courseItem.description}</div>
        <video
          controls
          src={courseItem.videoUrl}
          poster="../src/img/preview.png"
          onPlay={() => {
            handlePlay(courseItem.courseId);
          }}
        ></video>
        <div>PRICE: ${courseItem.price}</div>
        {isPurchased ? (
          <input className="action-button secondary" type="button" value="VIEW COURSE"></input>
        ) : (
          <input
            className="action-button"
            type="button"
            value="BUY COURSE"
            onClick={() => {
              handlePurchase(courseItem.courseId);
            }}
          ></input>
        )}
      </div>
    </div>
  );
};

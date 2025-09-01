import React, { useEffect, useState } from 'react';
import { ICourse } from '../types';
import { CourseCard } from './CourseCard';

export const CourseList = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify([
        {
          courseId: '001',
          title: 'title',
          description: 'some text...',
          videoUrl: '(HLS/MP4)',
          price: '100',
        },
        {
          courseId: '002',
          title: 'title',
          description: 'some text...',
          videoUrl: '(HLS/MP4)',
          price: '100',
        },
        {
          courseId: '003',
          title: 'title',
          description: 'some text...',
          videoUrl: '(HLS/MP4)',
          price: '100',
        },
      ]),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCourses(json);
      })
      .catch((err) => setError('Failed to fetch courses' + err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const coursesArray = Object.values(courses).filter((el) => el.courseId);

  return (
    <>
      <div className="courses-section">
        {coursesArray.map((course) => (
          <CourseCard courseItem={course} key={course.courseId}></CourseCard>
        ))}
      </div>
    </>
  );
};

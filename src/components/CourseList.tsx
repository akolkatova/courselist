import React, { useEffect, useState } from 'react';
import './CourseList.css';
import { AppState, ICourse } from '../types';
import { CourseCard } from './CourseCard';
import { useSelector } from 'react-redux';

export const CourseList = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const current = useSelector((state: AppState) => state.current);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify([
        {
          courseId: '001',
          title: 'Big Buck Bunny',
          description: 'Classic demo video for testing',
          videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          price: '50',
        },
        {
          courseId: '002',
          title: 'Sintel',
          description: 'Classic demo video for testing',
          videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
          price: '10',
        },
        {
          courseId: '003',
          title: 'Tears of Steel',
          description: 'Classic demo video for testing',
          videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
          price: '100',
        },
        {
          courseId: '004',
          title: 'Elephants Dream',
          description: 'Classic demo video for testing',
          videoUrl: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
          price: '120',
        },
      ]),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        delete json.id;
        setCourses(json);
      })
      .catch((err) => setError('Failed to fetch courses' + err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
    <div hidden={!current?.courseId}>Current Course: {current?.title}</div>
      <div className="courses-section">
        {Object.values(courses).map((course) => (
          <CourseCard courseItem={course} key={course.courseId}></CourseCard>
        ))}
      </div>
    </>
  );
};

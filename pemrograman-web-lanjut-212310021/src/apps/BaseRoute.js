import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChapterOne } from '../modules/chapter-1';
import { ChapterTwo } from '../modules/chapter-2';
import Auth from '../modules/chapter-2/widgets/authentifications';

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne />} />
        <Route path='Sign-In' element={<Auth />} />
        <Route path='Sign-Out' element={<Auth />} />
        <Route path='ChapterOne' element={<ChapterOne />} />
        <Route path='ChapterTwo' element={<ChapterTwo />} />
        <Route path='home' element={<ChapterTwo />} />
      </Routes>
    </React.Suspense>
  );
}

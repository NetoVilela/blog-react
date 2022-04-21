import { Routes, Route, Navigate } from 'react-router-dom';

import {Home} from '../pages/Home/Home';
import {Posts} from '../pages/Posts/Posts';

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

};
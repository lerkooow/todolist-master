import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import ROUTES from '../../utils/routes';
import UserSignup from '../User/UserSignup';
import UserLogin from '../User/UserLogin';
import TodoHeader from '../Todo/TodoHeader';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.SIGNUP} element={<UserSignup />} />
      <Route path={ROUTES.LOGIN} element={<UserLogin />} />
      <Route path={ROUTES.TODO} element={<TodoHeader />} />
    </Routes>
  );
}

export default AppRoutes;

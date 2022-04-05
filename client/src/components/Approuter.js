import React, { useContext } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../route';
import Auth from '../pages/Auth';

import { Context } from '..';
import NavBar from './Navbar';
const AppRouter = () => {
  const {user} = useContext(Context)

  return (
    <Routes>
  
      {user.isAuth &&
        authRoutes.map(({ path, component }) => {
            console.log(component, "component")
          return (
            <Route key={path} path={path} element={component} exact></Route>
          );
        })}
      {
        publicRoutes.map(({ path, component }) => {
          return (
            <Route key={path} path={path} element={component} exact></Route>
          );
        })}
        {/* <Redirect to = {SHOP_ROUTE}></Redirect> */}
    </Routes>
  );
};

export default AppRouter;

import React, { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { aboutRoutes } from '@packages/shared/routes/admin'
import { shopRoutes } from '@packages/shared/routes/shop'
import CustomButton from '@packages/shared/components/button/CustomButton';

function App() {

  return (
    <div className="App" data-testid='app'>
      App page
      <div className={classes.nav}>
        <Link to={aboutRoutes.about}>About</Link>
        <Link to={shopRoutes.main}>Shop</Link>
      </div>
      <CustomButton title='Shared button' />
      <Outlet />
    </div>
  );
}

export default App;

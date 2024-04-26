import React, { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App" data-testid='app'>
      <h1>Admin module</h1>
      <Outlet />
    </div>
  );
}

export default App;

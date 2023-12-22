import React, { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App" data-testid='app'>
      Admin module
      <Outlet />
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signin from './pages/signin';
import Register from './pages/Register';

const App = () => {
  return(
    <div>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
};

export default App;

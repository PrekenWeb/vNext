import React, { FC } from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home';
import Preken from './pages/preken';
import Preek from './pages/preek';


const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/preken' element={<Preken />} />
        <Route path='/preek' element={<Preek />} />
      </Routes>
    </div>
  );
}

export default App; 
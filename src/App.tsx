import React, { FC } from 'react';
import './App.scss';
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Artikelen from './components/artikelen/artikelen'
import RecentePreken from './components/preken/recentePreken'
import Header from './components/header/header'
import { Routes, Route, Link } from "react-router-dom"

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allepreken' element={<AllePreken />} />
        <Route path='/prekendetail' element={<PrekenDetail />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
    <Header />
    <Main />
    <Artikelen />
    <RecentePreken />
    <Footer />
    </>
  );
}

function AllePreken() {
  return (
    <>
    <Header />
    <Footer />
    </>
  );
}

function PrekenDetail() {
  return (
    <>
    <Header />
    <Footer />
    </>
  );
}

export default App; 
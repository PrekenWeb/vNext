import React, { FC } from 'react';
import './App.scss';
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Artikelen from './components/artikelen/artikelen'
import RecentePreken from './components/preken/recentePreken'
import Header from './components/header/header'
import AllePreken from './components/alle_preken/alle_preken'
import PrekenDetail from './components/prekendetail/preekdetail'
import { Routes, Route } from "react-router-dom"


const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allepreken' element={<AllePrekenPagina />} />
        <Route path='/prekendetail' element={<PrekenDetailPagina />} />
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

function AllePrekenPagina() {
  return (
    <>
    <Header />
      <AllePreken />
    <Footer />
    </>
  );
}

function PrekenDetailPagina() {
  return (
    <>
    <Header />
      <PrekenDetail />
    <Footer />
    </>
  );
}


export default App; 
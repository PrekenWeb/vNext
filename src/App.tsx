import React, { FC } from 'react';
import './App.scss';
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Artikelen from './components/artikelen/artikelen'
import RecentePreken from './components/preken/recentePreken'
import Header from './components/header/header'
import Alle_Preken from './components/alle_preken/alle_preken'
import PrekenDetail from './components/prekendetail/preekdetail'
import { Routes, Route, Link } from "react-router-dom"

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allepreken' element={<AllePrekenPagina />} />
        <Route path='/prekendetail' element={<PrekenDetailPagina />} />
        <Route path='/contact' element={<Contact />}/>
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
      <Alle_Preken />
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

function Contact() {
  return (
    <>
    <Header />
      <h1>Contact Pagina</h1>
    <Footer />
    </>
  );
}

export default App; 
import React, { FC } from 'react';
import './App.scss';
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Artikelen from './components/artikelen/artikelen'
import RecentePreken from './components/preken/recentePreken'
// import Header from './components/header/header'

const App: FC = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <Main/>
      <Artikelen />
      <RecentePreken />
      <Footer />
    </div>
  );
}

export default App; 
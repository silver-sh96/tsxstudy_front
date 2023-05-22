import React from 'react';
import 'react-router';
import NoticeList from './pages/NoticeList';
import NoticeWrite from './pages/NoticeWrite';
import Header from './fragment/Header';
import { Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<NoticeList/>}/>
        <Route path='/write' element={<NoticeWrite/>}/>
      </Routes>
    </>
  );
}

export default App;

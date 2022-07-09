import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Backend from './pages/backend/Backend';
import Web from './pages/web/Web';
import Mobile from './pages/mobile/Mobile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='mobile' element={<Mobile />} />
          <Route path='mobile' element={<Web />} />
          <Route path='mobile' element={<Backend />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

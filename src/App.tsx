import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Backend from './pages/backend/Backend';
import Web from './pages/web/Web';
import Mobile from './pages/mobile/Mobile';
import NotFound from './pages/notfound/NotFound';


function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='mobile' element={<Mobile />} />
          <Route path='web' element={<Web />} />
          <Route path='backend' element={<Backend />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

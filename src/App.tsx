import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound, Projects, About } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path=':id' element={<Projects />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

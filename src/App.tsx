import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound, Projects, About, Mobile, Backend, Web } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          {/* projects page from the home page */}
          <Route path='projects' element={<Projects />} />
          {/* pages for portfolio on web mobile and android */}
          <Route path='web' element={<Web />} />
          <Route path='react' element={<Web />} />
          <Route path='mobile' element={<Mobile />} />
          <Route path='flutter' element={<Mobile />} />
          <Route path='backend' element={<Backend />} />
          <Route path='python' element={<Backend />} />
          {/* about page */}
          <Route path='about' element={<About />} />
          {/* error 404 page */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

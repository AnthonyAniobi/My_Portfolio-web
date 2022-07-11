import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound, Projects, About } from './pages';

function App() {

  // const subdomain = window.location.host.split(".")[0];

  // switch (subdomain) {
  //   case 'web':
  //     return <Web />;

  //   case 'mobile':
  //     return <Mobile />;

  //   case 'backend':
  //     return <Backend />;

  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

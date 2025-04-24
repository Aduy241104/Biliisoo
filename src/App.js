import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeaderPage from './PageComponent/HeaderPage';
import React, { Suspense, lazy } from 'react';


const Home = lazy(() => import('./Page/Home'));
const Store = lazy(() => import('./Page/Store'));
const ProductDetail = lazy(() => import('./Page/ProductDetail'));
const TestPage = lazy(() => import('./Page/TestPage'));
const MediaDetail = lazy(() => import('./Page/MediaDetail'));
const News = lazy(() => import('./Page/News'));
const PlayMusic = lazy(() => import('./Page/PlayMusic'))
function App() {
  return (
    <>
      <HeaderPage />


      <Suspense fallback={ <div className="text-center mt-5">Loading page...</div> }>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path='/' element={ <Home /> } />
          <Route path='/Store' element={ <Store /> } />
          <Route path='/ProductDetail/:id' element={ <ProductDetail /> } />
          <Route path='/test' element={ <TestPage /> } />
          <Route path='/media/:id' element={ <MediaDetail /> } />
          <Route path='/news' element={ <News /> } />
          <Route path='/playMusic/:id' element={ <PlayMusic /> } />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

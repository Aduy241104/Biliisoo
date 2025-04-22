import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Page/Home';
import HeaderPage from './PageComponent/HeaderPage';
import Store from './Page/Store';
import ProductDetail from './Page/ProductDetail';
import TestPage from './Page/TestPage';
import MediaDetail from './Page/MediaDetail';


function App() {
  return (
    <>
      <HeaderPage />
     

      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='/Store' element={ <Store /> } />
        <Route path='/ProductDetail/:id' element={ <ProductDetail /> } />
        <Route path='/test' element={ <TestPage /> } />
        <Route path='/media' element={ <MediaDetail /> } />
      </Routes>
    </>
  );
}

export default App;

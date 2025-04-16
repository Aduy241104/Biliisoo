import { Link, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Page/Home';
import HeaderPage from './Components/HeaderPage';
import Store from './Page/Store';
import ProductDetail from './Page/ProductDetail';


function App() {
  return (
    <>
      <HeaderPage />
     
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Store' element={ <Store /> } />
        <Route path='/ProductDetail/:id' element={ <ProductDetail /> } />
      </Routes>
    </>
  );
}

export default App;

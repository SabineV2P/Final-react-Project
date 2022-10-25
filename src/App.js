import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import { useEffect , useState } from 'react';
import Nav from './COMP/Nav';
import Home from './COMP/Home';
import Category from './COMP/Cat';
import Single from './COMP/Single';
import Footer from './COMP/Footer';
import NotFound from './COMP/NotFound404'
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/category/:category' element={<Category/>}/>
        <Route path='/single/:category/:id' element={<Single/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    <Footer/>
    </BrowserRouter>    
    </>
  );
}

export default App;

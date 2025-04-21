import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Items from './Components/Items'
import request from './Components/request';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import { Link } from 'react-router-dom';



function App() {
  return (
    <>
      <div className="App">
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='btn' to={'/login'} ><i class="fa-solid fa-user"></i>Login</Link>
            <Link className='btn' to={'/cart'}><i class="fa-solid fa-cart-shopping"></i>Cart</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/cart' Component={Cart}/>
      </Routes>
      {/* <Items fetchUrl={request.fetchitems} title='items'/> */}
     
      <Footer/>
     
    </>
  );
}
export default App;
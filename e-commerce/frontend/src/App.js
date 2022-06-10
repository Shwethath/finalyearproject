import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Container from 'react-bootstrap/Container';
import HomeScreen from './screens/HomeScreen';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShippingAddS from './screens/ShippingAddS';
import SignupScreen from './screens/SignupScreen';
import SearchBox from './components/SearchBox';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import SearchScreen from './screens/SearchScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const logoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <div className="text-center prj">Modern E-Commerce Website</div>
        <header>
          <Navbar bg="Blue" variant="light">
            <Container>
              <Link to="/">
                <Navbar.Brand>Shopee Day</Navbar.Brand>
              </Link>
              <NavbarToggle aria-controls="basic-navbar-nav" />

              <NavbarCollapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className=" justify-content-end">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <Link to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </Link>
                      <Link to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </Link>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#logout"
                        onClick={logoutHandler}
                      >
                        Log Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  )}
                </Nav>
              </NavbarCollapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<SigninScreen />} />
              <Route path="/shipping" element={<ShippingAddS />}></Route>
              <Route path="/register" element={<SignupScreen />} />
              <Route path="/search" element={<SearchScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

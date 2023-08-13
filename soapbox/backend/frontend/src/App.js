import {Container} from 'react-bootstrap'

import Header from "./components/Header";
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container fluid className='mb-5 px-md-5' >
          <Routes>
            <Route path={"/"} element={<HomeScreen/>} exact/>
            <Route path={"product/:id"} element={<ProductScreen/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/profile"} element={<ProfileScreen/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/cart/?"} element={<CartScreen/>}/>
          </Routes>
          
        </Container>
        
      </main>
      <Footer/>
    </Router>
  );
      
}

export default App;

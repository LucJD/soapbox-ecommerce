import {Container} from 'react-bootstrap'

import Header from "./components/Header";
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container fluid className='mb-5'>
          <Routes>
            <Route path={"/"} element={<HomeScreen/>} exact/>
            <Route path={"product/:id"} element={<ProductScreen/>}/>
            <Route path={"login"} element={<Login/>}/>
            <Route path={"/cart/:id?"} element={<CartScreen/>}/>
          </Routes>
          
        </Container>
        
      </main>
      <Footer/>
    </Router>
  );
      
}

export default App;

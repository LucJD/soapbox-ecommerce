import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ShippingScreen from "./screens/shippingScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container fluid className="mb-5 px-md-5">
          <Routes>
            <Route path={"/?"} element={<HomeScreen />} exact />
            <Route path={"product/:id"} element={<ProductScreen />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/profile"} element={<ProfileScreen />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/cart/?"} element={<CartScreen />} />

            <Route path={"/admin/userlist"} element={<UserListScreen />} />
            <Route path={"/admin/user/edit/:id"} element={<UserEditScreen />} />
            <Route path={"/admin/orderlist"} element={<OrderListScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route
              path={"/admin/product/:id/edit"}
              element={<ProductEditScreen />}
            />

            <Route
              path={"/orders/:id"}
              element={<OrderScreen></OrderScreen>}
            ></Route>

            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/about" element={<AboutScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

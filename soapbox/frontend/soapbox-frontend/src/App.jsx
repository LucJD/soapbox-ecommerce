import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import About from "./features/about/About";
import Shop from "./features/shop/Shop";
import Contact from "./features/contact/Contact";
import Users from "./features/users/Users";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/shop",
        element: <Shop />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/users", element: <Users /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

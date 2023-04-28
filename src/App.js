
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import { CartProvider } from './CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Store/>,
  },
  {
    path: "/success",
    element: <Success/>,
  },
  {
    path: "/cancel",
    element: <Cancel/>,
  },
]);

function App() {
  return (
      <CartProvider>
    <Container>
      <Navbar />
      <RouterProvider router={router} />
    </Container>
      </CartProvider>
  );
}

export default App;

import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  // Route,
  useLocation
} from 'react-router-dom';
import ItemDetails from "./item-details/ItemDetails";
import Checkout from './scenes/checkout/Checkout.jsx'
import Confirmation from "./scenes/checkout/Confirmation";
import Home from './scenes/home/Home';
import Navbar from "./scenes/global/Navbar";

// When we will go to a new page it will start showing info from top of the page.
const ScrollToTop = () => {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName])

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes path="/" element={<Home />}></Routes>
      <Routes path="item/:itemId" element={<ItemDetails />}></Routes>
      <Routes path="checkout" element={<Checkout />}></Routes>
      <Routes path="checkout/success" element={<Confirmation />}></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

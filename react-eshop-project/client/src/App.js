import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import ItemDetails from "./item-details/ItemDetails";
import Checkout from './scenes/checkout/Checkout.jsx'
import Confirmation from "./scenes/checkout/Confirmation";
import Home from './scenes/home/Home';
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";

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
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="item/:itemId" element={<ItemDetails />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="checkout/success" element={<Confirmation />}></Route>
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;

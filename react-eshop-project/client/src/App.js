import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

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
      <ScrollToTop />
      </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // "Routes" was formerly referred to as "Switch"
import Checkout from './Checkout';

function App() {
  return (
    // BEM Convention
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" 
          element={ <> <Home/> </> } 
          />
          <Route path="/checkout" 
          element={ <> <Checkout /> </> }
          /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

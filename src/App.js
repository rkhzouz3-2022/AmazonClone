import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // "Routes" was formerly referred to as "Switch"
import Checkout from './Checkout';
import Login from "./Login";

function App() {
  return (
    // BEM Convention
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login"
          element={<> <Login/> </>} 
          />
          <Route path="/" 
          element={ <> <Header/> <Home/> </> } 
          />
          <Route path="/checkout" 
          element={ <> <Header/> <Checkout/> </> }
          /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

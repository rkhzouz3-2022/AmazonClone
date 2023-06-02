import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // "Routes" was formerly referred to as "Switch"
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    // Will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

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

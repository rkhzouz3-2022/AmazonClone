import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from './Checkout';
import Login from "./Login";
import Payment from './Payment';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // "Routes" was formerly referred to as "Switch"
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
    // Route's elements are in fragments to allow rendering of multiple components
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" 
            element={ <> <Header/> <Home/> </> } 
          />
          <Route path="/login"
            element={<> <Login/> </>} 
          />
          <Route path="/checkout" 
            element={ <> <Header/> <Checkout/> </> }
          />
          <Route path="/payment"
            element={<> <Header/> <Payment/> </>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

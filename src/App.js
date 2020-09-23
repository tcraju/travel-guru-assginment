import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import NoMatch from './components/NoMatch/NoMatch';
import LocationDetail from './components/LocationDetail/LocationDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';


export const UserContext = createContext()

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute path="/:id/booking">
            <LocationDetail />
          </PrivateRoute>
          <Route path='/:id'>
            <Booking />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

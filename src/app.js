import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import NotMatch from './pages/NotMatch';
import Rockets from './pages/Rockets';
import { getRockets } from './redux/rockets/rocketsSlice';
import store from './redux/configureStore';
import MyProfile from './pages/MyProfile';

const App = () => {
  useEffect(() => {
    store.dispatch(getRockets());
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" />
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/missions" />
        <Route path="/my-profile">
          <MyProfile />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

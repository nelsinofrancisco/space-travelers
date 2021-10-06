import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import NotMatch from './pages/NotMatch';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import { getRockets } from './redux/rockets/rocketsSlice';
import { getMissions } from './redux/missions/missionsSlice';
import store from './redux/configureStore';
import MyProfile from './pages/MyProfile';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    store.dispatch(getRockets());
    store.dispatch(getMissions());
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/rockets">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
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

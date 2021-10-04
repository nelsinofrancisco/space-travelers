import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import NotMatch from './pages/NotMatch';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" />
      <Route path="/rockets" />
      <Route path="/missions" />
      <Route path="/my-profile" />
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </Router>
);

export default App;

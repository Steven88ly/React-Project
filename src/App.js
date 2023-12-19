import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Users from './user/pages/Users.js';
import NewPlace from './places/pages/NewPlace.js';

const App = () => {
  return <Router>
    <Switch>
      <Route path='/' exact component={Users}/>  
      <Route path='/places/new' exact component={NewPlace}/>
      <Redirect to='/'/>
    </Switch>
  </Router>
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Dict from './pages/Dict.js';

const App = (props) => {
  return (
    <React.Fragment>
      <div className='app-root'>
        <Link to='/'>Home</Link>
        <Link to='/dict'>Dictionary</Link>
      </div>
      <Switch>
        <Route path='/' exact render={ () => (<Redirect to='/home' />) } />
        <Route path='/home' component={Home} />
        <Route path='/dict' component={Dict} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
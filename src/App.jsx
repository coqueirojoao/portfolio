import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

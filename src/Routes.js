import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './App'; // Importa Login desde App.js
import Menu from './Menu';  

function Routes() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/menu" component={Menu} />
    </Router>
  );
}

export default Routes;

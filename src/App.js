import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from './routes'

function App() {
  return (
    <>
      <Router>
        <Switch>
          {Routes.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route,
  HashRouter as Router,
  NavLink as Link
} from 'react-router-dom';
import './App.css';
const PersonDetails = lazy(() => import('./pages/PersonDetails'));
const EmployeeList = lazy(() => import('./pages/EmployeeList'));
const EmployeeDetails = lazy(() => import('./pages/EmployeeDetails'));
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {

  return (
    <div className="App">
      <Router>
          <div className="links">
            <Link to="/person-details">Person Details</Link>
            <Link to="/employee-list">Employee List</Link>
          </div>
          <br/><br/>
          <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                  <Route path="/person-details">
                      <PersonDetails />
                  </Route>
                  <Route path="/employee-list">
                      <EmployeeList />
                  </Route>
                  <Route path="/employee-details/:id">
                      <EmployeeDetails />
                  </Route>
                  <Route path="/" >
                    <HomePage />
                  </Route>
              </Switch>
          </Suspense>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { ProvideAuth, useAuth } from "./providers/auth";
import './App.css';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Route path='/login' component={Login} exact />
        <PrivateRoute path="/home" >
          <Home />
        </PrivateRoute>
        <Route render={() => <Redirect to="/home" />} />
      </Router>
    </ProvideAuth>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
}

export default App;

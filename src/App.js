import { BrowserRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import './App.css';
import { ProvideAuth, useAuth } from "./providers/auth";


function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
          <Route path="/login" component={Login} exact />
          {/*<Route path="/about" component={About} />*/}
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  console.log(auth.user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;

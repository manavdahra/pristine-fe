import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { ProvideAuth, useAuth } from "./providers/auth";
import { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/globalStyles';
import { useTheme } from './theme/useTheme';
import './App.css';

function App() {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <div style={{fontFamily: selectedTheme.font}}>
          <ProvideAuth>
            <Router>
              <Route path='/login' component={Login} exact />
              <PrivateRoute path="/home" >
                <Home />
              </PrivateRoute>
              <Route render={() => <Redirect to="/home" />} />
            </Router>
          </ProvideAuth>
        </div>
      </ThemeProvider>
    }
    </>
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

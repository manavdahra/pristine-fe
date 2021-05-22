import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { ProvideAuth, useAuth } from "./providers/auth";
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/globalStyles';
import { useTheme } from './theme/useTheme';
import './App.css';


const Container = styled.div`
  margin: 5px auto 5px auto;
`;

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
        <Container style={{fontFamily: selectedTheme.font}}>
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
        </Container>
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

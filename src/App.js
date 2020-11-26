import React, { Suspense, lazy, useState } from 'react';
import {
  Switch,
  Route, Router
} from "react-router-dom";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import './App.scss';
import Login from './screens/Login';
import PrivateRoute from './PrivateRoute';
import { createBrowserHistory } from "history";
import { AuthContext } from "./context/auth";
import Topbar from './partials/Topbar';

const history = createBrowserHistory();

// su dung lazy load de tang performance khi tai trang
const Homepage = lazy(() => import("./screens/Homepage"));
const AboutUs = lazy(() => import("./screens/AboutUs"));
const Cards = lazy(() => import("./screens/Cards"));
const Market = lazy(() => import("./screens/Market"));
const Stock = lazy(() => import("./screens/Stock"));
const Invest = lazy(() => import("./screens/Invest"));
const ContactUs = lazy(() => import("./screens/ContactUs"));
const Blog = lazy(() => import("./screens/Blog"));
const NotFound = lazy(() => import("./screens/NotFound"));

function App() {
  const existingTokens = localStorage.getItem("token");
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("token", data);
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }} >
      <Router history={history}>
        <div className="App">
          <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Topbar></Topbar>
                <Header history={history}/>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Login} />
                    <Route exact path="/stock" component={Stock} />
                    <Route exact path="/ai-train" component={Invest} />
                    <PrivateRoute exact path="/market" component={Market} />
                    <PrivateRoute exact path="/stock" component={Stock} />
                    <PrivateRoute exact path="/ai-train" component={Invest} />
                    <PrivateRoute exact path="/edu" component={ContactUs} />
                    <Route exact path="/blog" component={Blog} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </Suspense>
              </div>
              <Footer />
            </div>
            <a className="scroll-to-top rounded" href="#page-top" style={{ display: "inline" }}>
              <i className="fas fa-angle-up"></i>
            </a>
          </div>

        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

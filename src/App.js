import React, { useState } from 'react';
import './App.css';
import {
    Switch,
    Route, NavLink,
} from "react-router-dom";
import BlogId from "./pages/BlogId";
import Home from "./pages/Home";
import BlogPost from "./pages/Blogpost";
import Login from "./pages/Login";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
          {/*<button*/}
          {/*    value={!isAuthenticated}*/}
          {/*    onClick={() => toggleIsAuthenticated(isAuthenticated)}*/}
          {/*>test*/}
          {/*</button>*/}

          <nav>
              <ul>
                  <li>
                      <NavLink to="/" exact activeClassName="active">Home</NavLink>
                  </li>
                  <li>
                      <NavLink to="/login" activeClassName="active">Login</NavLink>
                  </li>
                  <li>
                      <NavLink to="/blogposts" activeClassName="active">Blog Overzicht</NavLink>
                  </li>
              </ul>
          </nav>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>

              <Route path="/login">
                  <Login/>
              </Route>

              <Route path="/blogposts">
                  <BlogPost/>
              </Route>

              <Route path="/blog/:id">
                  <BlogId/>
              </Route>
          </Switch>
      </>


  );
}

export default App;

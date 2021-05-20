
import '../../App.css';
import AppBar from '../AppBar';
import Whiteboard from "../whiteboard";
import Page1 from"../unit info";


import React, { Fragment, useState, useEffect } from "react";

//
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";



function App() {
    
  return (
      <Fragment>
          <Router>
              <div>
                  <Switch>
                    
                    
                      <Route exact path="/whiteboard" render={props =>
                          <Whiteboard {...props} />
                      }/>

                      <Route exact path="/FIT1010" render={props =>
                          <Page1 {...props} />
                      }/>

                  </Switch>
              </div>
          </Router>
      </Fragment>

  );
}

// export default App;

export default App;

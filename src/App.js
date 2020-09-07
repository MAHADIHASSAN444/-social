import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './components/post/Post';
import { Button } from '@material-ui/core';
import NoMatch from './NoMatch/NoMatch';
import Postdetails from './components/Postdetails/Postdetails';
// import Postdetails from './components/Postdetails/Postdetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post">
          <Post></Post>
        </Route>
        <Route path= "/about/:postId">
          <Postdetails></Postdetails>
          
        </Route>
        <Route exact path="/">
          <Post />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  // <div className="App">
      
  //     <Button></Button>
      
  //   </div>  
  );
}

export default App;

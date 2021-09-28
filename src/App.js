import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default class App extends Component {
  render() {
    return (
      <Router>
      <div >
       <Navbar/>
       <Switch>
          <Route exact path="/"><News key=""  pageSize ={8} country ="in" category ="general"/></Route>
          <Route exact path="/business"><News key="" pageSize ={8} country ="in" category ="business"/> </Route>
          <Route exact path="/sports"><News key="" pageSize ={8} country ="in" category ="sports"/></Route>
          <Route exact path="/technology"><News key="technology"  pageSize ={8} country ="in" category ="technology"/></Route>
          <Route exact path="/science"><News key="science"  pageSize ={8} country ="in" category ="science"/></Route>
          <Route exact path="/entertainment"><News key="entertainment"  pageSize ={8} country ="in" category ="entertainment"/></Route>
          <Route exact path="/health"><News key="health"  pageSize ={8} country ="in" category ="health"/></Route>
        
        </Switch>
      </div>
      </Router>
    )
  }
}




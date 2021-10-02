import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";





export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_API


  state ={
    progress:0
  }
  setProgress =(progress) => {
    this.setState({progress : progress})
  }

  render() {
    return (
      <Router>
      <div >
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey}   key=""  pageSize ={this.pageSize} country ="in" category ="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="" pageSize ={this.pageSize} country ="in" category ="business"/> </Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="" pageSize ={this.pageSize} country ="in" category ="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology"  pageSize ={this.pageSize} country ="in" category ="technology"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="science"  pageSize ={this.pageSize} country ="in" category ="science"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment"  pageSize ={this.pageSize} country ="in" category ="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="health"  pageSize ={this.pageSize} country ="in" category ="health"/></Route>
        
        </Switch>
      </div>
      </Router>
    )
  }
}




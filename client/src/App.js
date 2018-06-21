import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from  "./components/About/About";
import Home from "./components/Home";
//import SearchGhibli from './components/Anime/SearchGhibli';
import Statistics from './components/Statistics/Statistics';

const uuidv4 = require('uuid/v4');
const uuidURL = uuidv4().replace(/-/gi, '');

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userCode: uuidURL
    };
  }
  componentDidMount(){
      if(localStorage.getItem('userCode') === null){
      localStorage.setItem('userCode', this.state.userCode);
      }
  
  }

  render(){
    return (
      <div>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/about" component={About} />
          <Route path='/statistics' component={Statistics}/>
        </Switch>
      </div>
    </div>

      )
    }
  }

export default App;


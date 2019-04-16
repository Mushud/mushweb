//esversion: 5
import React, { Component } from 'react';
import './App.css';
import Landing from './landing';
import $ from 'jquery';
import BasicInfo from './basicInfo';
import Education from './education';
import Contact from './contact';
class App extends Component {

  sidebar = () => {
      $(".ui.left.sidebar").sidebar('toggle')
  }
  render() {
    return (
      
      <div className="App">
      <div className="ui top attached demo menu">

      
      </div>
      <div className=" dimmed pusher">
      <Landing />
      <BasicInfo />
      <Education />
      <Contact />
      </div> 
      </div>
    
    );
  }
}

export default App;

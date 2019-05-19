
import React, { Component } from 'react';
import Landing from './landing';
import $ from 'jquery';
import BasicInfo from './basicInfo';
import Education from './education';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Mushud</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#basic">Basic Information<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#education">Education</a>
      </li>
    </ul>
    
  </div>
</nav>
 
        </div>
        <Landing />
        <BasicInfo />
       <Education />
       <Contact />
      </div>
    
    );
  }
}

export default App;

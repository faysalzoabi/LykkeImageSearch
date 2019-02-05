import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Imagelist from './components/Imagelist/Imagelist';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Title/>
        <Search/>
        <Imagelist/>
     </div>
    );
  }
}

export default App;

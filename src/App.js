import React from 'react';
import Search from './Search.js'
import Display from './Display.js'
import './App.css';
import logo from './logo.svg';
import Image from 'react-bootstrap/Image';
import { Parallax, Background } from 'react-parallax';



const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <Image src="/sunny.jpg" />
    </Parallax>
);

const location = "Berkeley,us";


class App extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <h1> Amy's Weather App </h1>
           Blah blah find out what the weather is like this week.
           </div>
           <img src={logo} className="App-logo" alt="logo" />

           <Search />

        </header>
      </div>
    )
  }

}
export default App;

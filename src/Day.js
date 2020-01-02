import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import styled, {css} from 'styled-components'
import App from './App.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const apiKey = "b6f9c25da2d86f310a1ed19f7c5bc7e5";


class Day extends React.Component {
    constructor(props) { super(props); }

    render (props) {
      const image = "http://openweathermap.org/img/wn/"+`${this.props.icon}`+"@2x.png";
      return (
        <Card bg="white" text="black" style={{ width: '15rem'}} className="card text-center">
          <Card.Body>
            <Card.Title className ="card-title">{this.props.time}</Card.Title>
              <Card.Subtitle className="card-text-secondary">  {this.props.description}</Card.Subtitle>
              <Card.Text>
                  <div>
                    <img src={image} alt="icon"/></div><div>
                      lo: {this.props.temp_min}˚F</div><div>
                      hi: {this.props.temp_max}˚F</div>
              </Card.Text>
          </Card.Body>
        </Card>
      )
    }
}

export default Day;

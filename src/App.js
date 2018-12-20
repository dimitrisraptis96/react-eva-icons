import React, { Component } from "react";
import * as eva from "eva-icons";

import logo from "./logo.svg";
import "./App.css";

import Card from "./Card/Card";
import styled from "styled-components";

const Container = styled.div``;

const ANIMATION_TYPES = {
  ZOOM: "zoom",
  PULSE: "pulse",
  SHAKE: "shake",
  FLIP: "flip"
};

class App extends Component {
  componentDidMount() {
    eva.replace({
      fill: "tomato",
      width: "24px",
      height: "24px",
      animation: {
        type: "pulse", // zoom, pulse, shake, flip
        hover: true, // default true
        infinite: false // default false
      }
    });
  }

  render() {
    const icons = Object.keys(eva.icons);

    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color: 'tomato'}}>
            {" "}
            <b>react-eva-icons</b>
          </h1>

          <div
            style={{
              padding: 0,
              margin: 0,
              listStyle: "none",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-around"
            }}
          >
            {icons.map((icon, index) => (
              <Card icon={<i data-eva={icon} key={index} />} name={icon} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import * as eva from "eva-icons";
import styled from 'styled-components';
import Cards from "./Cards/Cards";


const ANIMATION_TYPES = {
  ZOOM: "zoom",
  PULSE: "pulse",
  SHAKE: "shake",
  FLIP: "flip"
};

const Wrapper = styled.div`
  padding: 1em 2em;
  background-color: green;

  max-width: 100vw;
`;

const Header = styled.div`
  max-width: 100%;
  margin-bottom: 2em;
  background-color: salmon;
`;

const Body = styled.div`
  max-width: 100%;
  background-color: lightgoldenrodyellow;
  margin: 1em;

  padding: 0;
  margin: 0;
  liststyle: none;
  display: flex;
  flexflow: row wrap;
  justifycontent: space-around;
`;


class App extends Component {
  state = {
    icons: []
  }

  componentWillMount() {
    const icons = Object.keys(eva.icons);
    this.setState({icons});
  }
  componentDidMount() {
    const config = {
      fill: "tomato",
      width: "24px",
      height: "24px",
      animation: {
        type: "pulse", 
        hover: true,
        infinite: false 
      }
    };

    eva.replace(config);
  }

  render() {
    const {icons} = this.state;

    return (
      <Wrapper>
        <Header> 
            react-eva-icons
        </Header>
        <Body>
          <Cards icons={icons} />
        </Body>
      </Wrapper>
    );
  }
}

export default App;

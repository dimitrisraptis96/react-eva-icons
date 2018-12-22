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
  /* background-color: green; */
  margin: 1em;

  max-width: 100vw;
`;

const Header = styled.div`
  max-width: 100%;
  margin-bottom: 2em;
  /* background-color: salmon; */
`;

const Body = styled.div`
  max-width: 100%;
  /* background-color: lightgoldenrodyellow; */
`;

const Logo = styled.h2`
  font-size: 1.25em;
  color: #263238;
  color: Turquoise;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  font-size: 0.75em;
  color: #aaa;

  margin: 2em;
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
      fill: "Turquoise",
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
          <Logo>
          ⚛❤ react-eva-icons
          </Logo>
        </Header>
        <Body>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Description>
          <Cards icons={icons} />
        </Body>
      </Wrapper>
    );
  }
}

export default App;

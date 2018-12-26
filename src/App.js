import React, { Component } from "react";
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
  padding: 2em 4em;
  background-color: #f4f4f4;

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
  color: #36f;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75em;
  color: #262626;
  text-orientation: center;
  max-width: 100%;

  margin: 2em 1em;
`;


class App extends Component {
  state = {
    icons: []
  }

  componentWillMount() {
    const icons = Object.keys(eva.icons);
    this.setState({icons});
  }

  render() {
    const {icons} = this.state;

    const config = {
      fill: "#36f",
      width: "24px",
      height: "24px",
      animation: {
        type: "pulse", 
        hover: true,
        infinite: false 
      }
    };
    
    return (
      <Wrapper>
        <Header> 
          <Logo>
          ⚛❤ react-eva-icons
          </Logo>
        </Header>
        <Body>
          <Description>
            👌 Pailess usage of
            {/* <b> <a target="_blank" href='https://akveo.github.io/eva-icons/#/'> Eva Icons. </a> </b> */}
            <b> Eva Icons </b>
            in your next awesome React JS application. 
          </Description>

          <Cards icons={icons} config={config}/>
        </Body>
      </Wrapper>
    );
  }
}

export default App;

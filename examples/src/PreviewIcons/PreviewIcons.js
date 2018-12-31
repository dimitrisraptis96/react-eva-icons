import React from 'react';
import styled from 'styled-components';

import Prism from "prismjs";
import "../styles/prism.css"

import Cards from "./Cards/Cards";


const Wrapper = styled.div`
  margin: 4em 2em;
`;

const Header = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 1.75em;
  color: #36f;
`;

const Paragraph = styled.p`
  font-family: "Montserrat", sans-serif;
  margin: 1em 1em;
  font-size: 1em;
  color: #262626;
`;

const PreviewIcons = (props) => {
    // Prism.highlightAll();
  return (

    <Wrapper>
      <Header>
        Available Icons
      </Header>
      <Cards icons={props.icons} config={props.config} />
    </Wrapper>
  );
};

export default PreviewIcons;
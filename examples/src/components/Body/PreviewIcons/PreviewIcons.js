import React from 'react';
import styled from 'styled-components';

import Cards from "./Cards/Cards";
import Header from "../../UI/Header";

const Wrapper = styled.div`
  margin: 4em 2em;
`;

const PreviewIcons = (props) => {
  return (
    <Wrapper>
      <Header> Available Icons </Header>
      <Cards icons={props.icons} config={props.config} />
    </Wrapper>
  );
};

export default PreviewIcons;
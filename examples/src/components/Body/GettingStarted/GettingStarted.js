import React from 'react';
import styled from 'styled-components';

import Header from "../../UI/Header";
import Paragraph from "../../UI/Paragraph";
import PreviewJS from "../../UI/PreviewJS";

const Wrapper = styled.div`
  margin: 4em 2em;
`;

const GettingStarted = (props) => {
  return (
    <Wrapper>
      <Header> Getting Started </Header>

      <Paragraph> Using npm </Paragraph>
      <PreviewJS code={`npm install --save react-eva-icons`} />
      
      <Paragraph> Or using yarn </Paragraph>
      <PreviewJS code={`yarn add react-eva-icons`} />
    </Wrapper>
  );
};

export default GettingStarted;
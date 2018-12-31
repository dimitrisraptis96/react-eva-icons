import React from 'react';

import Prism from "prismjs";
import "../styles/prism.css"

import styled from 'styled-components';

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

const GettingStarted = (props) => {
    // Prism.highlightAll();
  return (

    <Wrapper>
      <Header>
        Getting Started
      </Header>
      <Paragraph>
        Using npm
      </Paragraph>
      <pre style={{margin: '1em 1em'}}>
        <code className="language-javascript">
        {`npm install --save react-eva-icons`}
      </code>
      </pre>
      <Paragraph>
        Or using yarn
      </Paragraph>
      <pre style={{margin: '1em 1em'}}>
        <code className="language-javascript">
        {`yarn add react-eva-icons`}
      </code>
      </pre>
    </Wrapper>
  );
};

export default GettingStarted;
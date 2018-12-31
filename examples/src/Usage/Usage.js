import React from 'react';
import PropTypes from 'prop-types';

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

const Usage = (props) => {
    // Prism.highlightAll();
  return (

    <Wrapper>
      <Header>
        Usage
      </Header>
      <Paragraph>
        {"Import 'react-eva-icons' package and you can use"} 
        &nbsp;
        <em><b>{"<Icon>"}</b></em>
        &nbsp;
        {"component"}
      </Paragraph>
      <pre style={{margin: '1em 1em'}}>
        <code className="language-javascript">
        {`
          import Icon from "react-eva-icons";
          
          ...

          render (
            <Icon 
              name="activity"
              size="medium"    //options: 'small', 'medium', 'large', 'xlarge'
              animation={{
                type: "pulse", 
                hover: true,
                infinite: false 
              }}
            />
          );
        `}
      </code>
      </pre>
    </Wrapper>
  );
};

export default Usage;
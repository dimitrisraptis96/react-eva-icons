import React from 'react';
import styled from 'styled-components';

import Header from "../../UI/Header";
import PreviewJS from "../../UI/PreviewJS";

const Wrapper = styled.div`
  margin: 4em 2em;
`;

const USAGE_CODE = `
  import Icon from 'react-eva-icons';

  ...

  render (
    <Icon 
      name="activity"
      size="medium"     // small, medium, large, xlarge
      animation={{
        type: "pulse",  // zoom, pulse, shake, flip
        hover: true,
        infinite: false 
      }}
    />
  );
`;

const Usage = (props) => {
  return (

    <Wrapper>
      <Header> Usage </Header>
      <PreviewJS code={USAGE_CODE}/>
    </Wrapper>
  );
};

export default Usage;
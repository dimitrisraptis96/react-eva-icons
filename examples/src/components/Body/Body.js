import React from 'react';
import styled from 'styled-components';

import Description from "./Description/Description";
import GettingStarted from "./GettingStarted/GettingStarted";
import Preview from "./PreviewIcons/PreviewIcons";
import Usage from "./Usage/Usage";

const Wrapper = styled.div`
  max-width: 100%;
`;

const Body = ({icons, config}) => {
  return (
    <Wrapper>
      <Description />
      <GettingStarted />
      <Usage />
      <Preview icons={icons} config={config} />
    </Wrapper>  
  );
};

export default Body;
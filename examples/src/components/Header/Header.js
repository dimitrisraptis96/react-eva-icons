import React from "react";
import styled from "styled-components";

import GithubIcon from "../UI/GithubIcon";
import {blue, dark} from "../../utils/colors";

const Wrapper = styled.div`
  max-width: 100%;
  /* margin-bottom: 2em; */

  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: salmon; */
`;

const Logo = styled.h2`
  font-size: 2em;
  color: ${dark};
  margin: 1em;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Blue = styled.span`
  color: ${blue};
`;

const IconWrapper = styled.div`
  margin-right: 2em;
`;

const Header = props => {
  return (
    <Wrapper>
      <Logo> 
        <Blue> ⚛❤ </Blue> 
        &nbsp;
        react-eva-icons
      </Logo>
      <IconWrapper>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/dimitrisraptis96/react-eva-icons'>
          <GithubIcon primaryColor={dark}/>
        </a>
      </IconWrapper>
    </Wrapper>
  );
};

export default Header;

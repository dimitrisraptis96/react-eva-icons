import React from "react";
import styled from "styled-components";

import GithubIcon from "../components/GithubIcon";

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
  /* color: #263238; */
  color: #36f;

  margin: 1em;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Header = props => {
  return (
    <Wrapper>
      <Logo>⚛❤ react-eva-icons</Logo>
      
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/dimitrisraptis96/react-eva-icons'>
        <GithubIcon primaryColor="#2A2D26"/>
      </a>

    </Wrapper>
  );
};

export default Header;

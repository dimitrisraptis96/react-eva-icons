import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  margin-bottom: 2em;
  /* background-color: salmon; */
`;

const Logo = styled.h2`
  font-size: 1.25em;
  color: #263238;
  color: #36f;

  margin: 1em;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <Logo>⚛❤ react-eva-icons</Logo>
    </Wrapper>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import { dark } from "../../utils/colors";

const Wrapper = styled.div`
  max-width: 100%;
  margin-top: 2em;
  padding: 2em 0 1em 0;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: salmon; */
`;

const Sup = styled.sup`
  font-family: "Montserrat", sans-serif;
  font-size: 0.75em;
  color: ${dark};
`;

const Footer = (props) => {
  return (
    <Wrapper>
      <Sup>Made with 🤘 by <a href="https://twitter.com/d__raptis">@d__raptis</a></Sup>
    </Wrapper>
  );
};

export default Footer;

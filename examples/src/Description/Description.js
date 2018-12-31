import React from "react";
import styled from "styled-components";
import FlatSVG from "../components/FlatSVG";

const Wrapper = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  color: #262626;
  text-align: center;
  max-width: 100%;

  margin: 2em 1em;
`;

const Description = (props) => {
  return (
    <Wrapper>
      <FlatSVG width={30} />

      <span role="img" aria-label="Ok gesture"> 👌 </span>
      Hurray! Directly add 
      <b> <a target="_blank" rel="noopener noreferrer" href='https://akveo.github.io/eva-icons/#/'>Eva Icons</a> </b>
      {/* <b> Eva Icons </b> */}
      as ReactJS components in your next awesome project. 

    </Wrapper>
  );
};

export default Description;

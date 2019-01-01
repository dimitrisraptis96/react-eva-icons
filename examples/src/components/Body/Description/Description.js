import React from "react";
import styled from "styled-components";
import FlatSVG from "../../UI/FlatSVG";

const Wrapper = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  color: #262626;
  /* text-align: center; */
  max-width: 100%;

  margin: 1em 3em 2em 3em;
`;

const Description = (props) => {
  return (
    <Wrapper>
      <FlatSVG width={100} />

      {/* <b> */}
      <span role="img" aria-label="Ok gesture"> 👌 </span>
      Hurray! Directly add 
      &nbsp;
      <a target="_blank" rel="noopener noreferrer" href='https://akveo.github.io/eva-icons/#/'>Eva Icons</a> 
      &nbsp;
      as ReactJS components in your next awesome project. 
      {/* </b> */}

    </Wrapper>
  );
};

export default Description;

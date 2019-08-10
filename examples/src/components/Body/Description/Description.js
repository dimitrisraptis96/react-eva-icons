import React from "react";
import styled from "styled-components";
import FlatSVG from "../../UI/FlatSVG";
import LiveCode from '../LiveCode/LiveCode'
import {dark} from "../../../utils/colors";

const Wrapper = styled.p`
  margin: 1em 3em 2em 3em;
`;

const TextWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-weight: bold;
  color: ${dark};
  text-align: center;
  max-width: 100%;
`;

const Description = (props) => {
  return (
    <Wrapper>
      {/* <FlatSVG width={100} /> */}

      <TextWrapper>
        <span role="img" aria-label="Ok gesture"> 👌 </span>
        Hurray! Directly add 
        &nbsp;
        <a target="_blank" rel="noopener noreferrer" href='https://akveo.github.io/eva-icons/#/'>Eva Icons</a> 
        &nbsp;
        as ReactJS components in your next awesome project. 
      </TextWrapper>      

      {/* TODO: Make that fucking code work */}
      {/* <LiveCode/> */}
    </Wrapper>
  );
};

export default Description;

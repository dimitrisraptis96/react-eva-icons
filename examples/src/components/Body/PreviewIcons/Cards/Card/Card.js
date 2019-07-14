import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { toast } from "react-toastify";

import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import "./toast.css";

import Icon from "../../../../../../../src/Icon";

const Wrapper = styled.div`
  background: white;
  padding: 3em;
  margin: 1em;

  border-radius: 16px;

  position: relative;
  box-shadow: 0 20px 24px -18px rgba(0, 0, 0, 0.31);
`;

function copyToClipboard(textToCopy) {
  // 1) Add the text to the DOM (usually achieved with a hidden input field)
  const input = document.createElement("input");
  document.body.prepend(input);
  input.value = textToCopy;
  input.id = "copy-input";

  // 2) Select the text
  input.focus();
  input.select();

  // 3) Copy text to clipboard
  const isSuccessful = document.execCommand("copy");

  // 4) Catch errors
  if (!isSuccessful) {
    console.error("Failed to copy text.");
  } else {
    toast("Copied!", {
      className: "black-background",
      bodyClassName: "grow-font-size",
      progressClassName: "fancy-progress-bar",
    });
  }
  document.body.removeChild(input);
}

const Card = ({ config, name }) => {
  const { fill, size, animation } = config;

  console.log("render Card");

  const copy = () => {
    console.log("gere");
    const text = `<Icon name="${name}" />`;
    copyToClipboard(text);
  };

  const icon = (
    <Icon animation={animation} fill={fill} name={name} size={size} />
  );

  return (
    <Wrapper onClick={copy}>
      <Tooltip
        animation="perspective"
        // title={name}
        title="Click to copy React code!"
        position="bottom"
        trigger="mouseenter"
      >
        {icon}
      </Tooltip>
    </Wrapper>
  );
};

Card.propTypes = {
  config: PropTypes.object,
  name: PropTypes.string,
};

Card.defaultProps = {
  config: {},
  name: "",
};

export default Card;

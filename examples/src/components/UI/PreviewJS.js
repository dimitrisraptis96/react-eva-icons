import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "../../styles/prism.css";

const Wrapper = styled.div`
  box-shadow: 0 20px 24px -18px rgba(0, 0, 0, 0.31);
  margin: 1em;
  border-radius: 8px;
`;

const PreviewJS = ({ code }) => {
  return (
    <Wrapper>
      <pre className="language-javascript">
        <code className="language-javascript">{code}</code>
      </pre>
    </Wrapper>
  );
};

PreviewJS.propTypes = {
  code: PropTypes.string,
};

PreviewJS.defaultProps = {
  code: "",
};

export default PreviewJS;

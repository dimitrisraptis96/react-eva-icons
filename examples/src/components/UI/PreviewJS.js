import React from 'react';
import PropTypes from 'prop-types';

import "../../styles/prism.css"

import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  margin: 1em;
`;

const PreviewJS = ({code}) => {

  return (
    <Wrapper>
      <pre>
        <code className="language-javascript">
          {code}
        </code>
      </pre>
    </Wrapper>
  );
};

PreviewJS.propTypes = {
  code: PropTypes.string,
};

PreviewJS.defaultProps = {
  code: '',
};

export default PreviewJS; 
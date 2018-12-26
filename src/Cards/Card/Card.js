import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon/Icon';

const Wrapper = styled.div`
  background: white;
  padding: 36px;
  margin: 12px;
  
  border-radius: 8px;

  position:relative;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
          box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
`;

const Card = ({ 
  config,
  name,
}) => {
  const {
    fill,
    width,
    height,
    animation,
  } = config;  

  return (
    <Wrapper>
      <Icon
        name={name}
        fill={fill}
        size='medium'
        animation={animation}
      />
    </Wrapper>
  );
};

Card.propTypes = {
  config: PropTypes.object,
  name: PropTypes.string,
};

Card.defaultProps = {
  config: {},
  name: '',
};

export default Card;
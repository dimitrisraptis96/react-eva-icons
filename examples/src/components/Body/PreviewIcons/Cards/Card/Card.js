import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css'

import Icon from '../../../../../../../src/Icon';

const Wrapper = styled.div`
  background: white;
  padding: 3em;
  margin: 1em;
  
  border-radius: 3px;

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
    size,
    animation,
  } = config;  

  console.log('render Card');

  const icon = (
    <Icon
      animation={animation}
      fill={fill}
      name={name}
      size={size}
    />
  );
  
  return (
    <Wrapper>
      <Tooltip
        animation="perspective"
        title={name}
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
  name: '',
};

export default Card;
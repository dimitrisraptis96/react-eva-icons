import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from "./Card/Card";

const Wrapper = styled.div`
  display: -webkit-flex;
	display: flex;

	-webkit-justify-content: center;
	justify-content: center;

	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	
  -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
`;

const Cards = ({icons}) => {
  return (
    <Wrapper>
      {icons.map((icon, index) => (
        <Card 
          icon={<i data-eva={icon}/>} 
          name={icon}
          key={index}
        />
      ))}
    </Wrapper>
  );
};

Cards.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
};

Cards.defaultProps = {
  icons: [],
};

export default Cards;
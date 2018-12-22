import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from "./Card/Card";

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  liststyle: none;
  display: flex;
  flexflow: row wrap;
  justifycontent: space-around;
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as eva from "eva-icons";

class Icon extends Component {

  componentDidMount() {
    const {
      fill,
      width,
      height,
      animation,
      size,
    } = this.props;


    // TODO: move this to componentwillrecieveprops
    let pxSize;
    switch (size) {
      case 'small':
        pxSize = '12px';
        break;

      case 'medium':
        pxSize = '18px';
        break;
  
      case 'large':
        pxSize = '24px';
        break;

      case 'xlarge':
        pxSize = '30px';
        break;

      default:
        pxSize = '18px'
    }

    const config = {
      fill,
      width: pxSize,
      height: pxSize,
      animation,
    };
    
    eva.replace(config);
  }

  render() {
    const {
      name,
    } = this.props;

    return(
      <i data-eva={name} />
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  animation: PropTypes.object,
};

Icon.defaultProps = {
  name: '',
  fill: '',
  width: '',
  height: '',
  animation: {},
};

export default Icon;
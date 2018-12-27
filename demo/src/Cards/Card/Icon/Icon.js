import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as eva from "eva-icons";

const SIZE = {
  SMALL: '12px',
  MEDIUM: '18px',
  LARGE: '24px',
  XLARGE: '30px',
};



const IconWrapper = styled.div`
  svg {
    width: ${p => p.width};
    height: ${p => p.height};
  }
`;

class Icon extends Component {

  constructor(props){
    super();
    const {
      fill,
      animation,
      name,
      size,
    } = props;

    this.state = {
      animation,
      size,
      fill,
      name,
    }
  }

  componentDidMount() {
    this.setupEvaIcons();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.size !== this.state.size) {
  //     this.setState({size: this.state.size});
  //   }
  // }
  
  // static getDerivedStateFromProps = (nextProps, prevState) =>{
  //   if ( nextProps.size !== prevState.size
  //     || nextProps.fill !== prevState.fill      
  //     || nextProps.animation !== prevState.animation
  //     || nextProps.name !== prevState.name
  //   ){
  //     this.setupEvaIcons();
  //   }
    
  //   return null;
  // }

  setupEvaIcons = () => {
    const {
      fill,
      animation,
      size,
    } = this.props;

    const dims = this.updateDims(size);

    console.log(dims);
    

    const config = {
      fill,
      width: dims,
      height: dims,
      animation,
    };
    

    eva.replace(config);
  }

  updateDims = (size) => {
    switch (size) {
      case 'small':
        return SIZE.SMALL;
      case 'medium':
        return SIZE.MEDIUM;  
      case 'large':
        return SIZE.LARGE;
      case 'xlarge':
        return SIZE.XLARGE;
      default:
        return SIZE.MEDIUM;
    }
  }
  
  componentDidUpdate() {
    console.log('<Icon> component updated') 
    this.setupEvaIcons();
  }

  render() {
    const {
      name,
      fill,
      size,
      animation,
    } = this.props;

    console.log('<Icon> component renders') 

    const dims = this.updateDims(size).split('px')[0];;
    
    const icon = (
      <i 
          data-eva={name}
          data-eva-fill={fill}
          data-eva-height={dims.split('px')[0]}
          data-eva-width={dims.split('px')[0]}
          data-eva-animation={animation}
        />
    );
    

    return(icon)
      // <IconWrapper width={dims + ' !important'} height={dims + ' !important'}>
      // </IconWrapper>
    // );
  }
}

Icon.propTypes = {
  animation: PropTypes.object,
  fill: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  animation: {},
  fill: '',
  name: '',
  size: 'medium',
};

export default Icon;
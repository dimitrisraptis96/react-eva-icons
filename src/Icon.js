import React, { Component } from "react";
import PropTypes from "prop-types";

import * as eva from "eva-icons";

const SIZE = {
  SMALL: "12px",
  MEDIUM: "18px",
  LARGE: "24px",
  XLARGE: "30px",
};

class Icon extends Component {
  componentDidMount() {
    this.setupEvaIcons();
  }

  componentDidUpdate() {
    this.setupEvaIcons();
  }

  setupEvaIcons() {
    const { fill, animation, size } = this.props;

    const dims = this.updateDims(size);

    const config = {
      fill,
      width: dims,
      height: dims,
      animation,
    };

    eva.replace(config);
  }

  updateDims(size) {
    switch (size) {
      case "small":
        return SIZE.SMALL;
      case "medium":
        return SIZE.MEDIUM;
      case "large":
        return SIZE.LARGE;
      case "xlarge":
        return SIZE.XLARGE;
      default:
        return SIZE.MEDIUM;
    }
  }

  render() {
    const { name, fill, size, animation } = this.props;

    const dims = this.updateDims(size);

    const icon = (
      <i
        data-eva={name}
        data-eva-fill={fill}
        data-eva-height={dims}
        data-eva-width={dims}
      />
    );

    return icon;
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
  fill: "#fff",
  name: "",
  size: "medium",
};

export default Icon;

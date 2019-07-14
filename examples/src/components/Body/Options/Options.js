import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grommet, RadioButton } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const customTheme = deepMerge(grommet, {
  radioButton: {
    gap: "xsmall",
    size: "18px",
    hover: {
      border: {
        color: "dark-3"
      }
    },
    check: {
      color: {
        light: "neutral-1"
      }
    },
    icon: {
      size: "10px"
    }
  }
});

const Options = (props) => {
  const {
    handleSize,
    size,
  } = props;
  
  return (
    <Grommet theme={grommet}>
      <Box align="start">
        {["small", "medium", "large", "xlarge"].map(label => (
          <Box key={label} margin={{ vertical: "small" }}>
            <RadioButton
              name="sizes"
              checked={size === label}
              label={label}
              onChange={() => handleSize(label)}
            />
          </Box>
        ))}
      </Box>
    </Grommet> 
  );
};

Options.propTypes = {
  handleSize: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};

Options.defaultProps = {
  handleSize: null,
  size: '',
};

export default Options;
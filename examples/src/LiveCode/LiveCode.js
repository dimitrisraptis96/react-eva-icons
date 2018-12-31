import React from 'react';
import PropTypes from 'prop-types';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'


const LiveCode = (props) => (
  <LiveProvider code="<strong>Hello World!</strong>">
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>  
);

export default LiveCode;
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import React from 'react';
import ReactDom from 'react-dom';

import ImageDisplay from './imagedisplay';

let element = document.querySelector('.app');

ReactDom.render(
  <ImageDisplay/>,
  element
);
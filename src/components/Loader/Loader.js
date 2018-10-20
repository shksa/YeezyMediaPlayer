import React from 'react';
import SpinnerSVG from '../../assets/spinner.svg'
import * as s from './style'

const Loader = ({forComp}) => (
  <s.loaderImg src={SpinnerSVG} alt="loader" forComp={forComp} />
);

export default Loader;
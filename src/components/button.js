import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, className, onclick }) => {
  <>
    <button type="button" id={id} className={className} onClick={onclick}>{id}</button>
  </>;
};

Button.prototype = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Button;

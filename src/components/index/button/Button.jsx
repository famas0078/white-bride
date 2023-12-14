import classes from './button.module.css';
import React, { useState } from 'react';
const Button = ({ label, isHighlighted, onClick }) => {
  return (
    <div className={isHighlighted ? `${classes.wrapper} ${classes.highlighted}` : classes.wrapper}>
      <button className={classes.button} onClick={onClick} isHighlighted={'Для детей'}>
        {label}
      </button>
    </div>
  );
};
export default Button;
'use client';

import React, { useState } from 'react';

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button onClick={handleClick}>{clicked ? 'Clicked!' : 'Click me'}</button>
  );
};

export default Button;

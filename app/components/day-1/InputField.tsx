'use client';

import React, { useState } from 'react';

const InputField = () => {
  const [value, setValue] = useState('');

  return (
    <input
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Type something'
    />
  );
};

export default InputField;

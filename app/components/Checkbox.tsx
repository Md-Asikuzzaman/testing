'use client';

import React, { useState } from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked ? 'Checked' : 'Unchecked'}
    </label>
  );
};

export default Checkbox;

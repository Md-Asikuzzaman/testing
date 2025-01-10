'use client';

import React, { useState } from 'react';

const ToggleText = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && <p>Hello, World!</p>}
    </div>
  );
};

export default ToggleText;

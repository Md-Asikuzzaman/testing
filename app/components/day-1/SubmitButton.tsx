'use client';

import React, { useState } from 'react';

const SubmitButton = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <button disabled={isDisabled}>Submit</button>
      <button onClick={() => setIsDisabled(false)}>Enable</button>
    </div>
  );
};

export default SubmitButton;

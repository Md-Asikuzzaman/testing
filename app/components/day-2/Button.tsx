'use client';

import React, { useState } from 'react';

const Button = () => {
  const [userActive, isUserActive] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => isUserActive(!userActive)}
        className='p-2 bg-green-400'
      >
        online
      </button>
      <h1>{userActive && 'User Online'}</h1>
    </div>
  );
};

export default Button;

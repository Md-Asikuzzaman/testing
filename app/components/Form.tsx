// Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }: { onSubmit: any }) => {
  const [value, setValue] = useState<any>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Enter text'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;

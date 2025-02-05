'use client';

import React, { useActionState } from 'react';
import { addressAction } from '../actions/addressAction';

const initialState = {
  success: false,
  message: '',
  errors: {},
  inputs: {
    username: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
};

const Login = () => {
  const [state, action, isPending] = useActionState(
    addressAction,
    initialState
  );

  console.log(state);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div>
        <form action={action} className='bg-gray-200 w-[450px] p-8 rounded-lg'>
          <input
            type='text'
            name='username'
            defaultValue={state?.inputs?.username}
            placeholder='Username'
            className={`input ${state?.errors?.username && 'border-red-500'}`}
          />

          {state?.errors?.username && (
            <p className='error mb-2 -mt-2'>{state.errors.username[0]}</p>
          )}

          <input
            type='text'
            name='email'
            placeholder='Email'
            defaultValue={state?.inputs?.email}
            className={`input ${state?.errors?.email && 'border-red-500'}`}
          />
          {state?.errors?.email && (
            <p className='error mb-2 -mt-2'>{state.errors.email[0]}</p>
          )}

          <input
            type='text'
            name='city'
            placeholder='City'
            defaultValue={state?.inputs?.city}
            className={`input ${state?.errors?.city && 'border-red-500'}`}
          />
          {state?.errors?.city && (
            <p className='error mb-2 -mt-2'>{state.errors.city[0]}</p>
          )}

          <input
            type='text'
            name='state'
            placeholder='State'
            defaultValue={state?.inputs?.state}
            className={`input ${state?.errors?.state && 'border-red-500'}`}
          />
          {state?.errors?.state && (
            <p className='error mb-2 -mt-2'>{state.errors.state[0]}</p>
          )}

          <input
            type='text'
            name='zip'
            placeholder='Zip'
            defaultValue={state?.inputs?.zip}
            className={`input ${state?.errors?.zip && 'border-red-500'}`}
          />
          {state?.errors?.zip && (
            <p className='error mb-2 -mt-2'>{state.errors.zip[0]}</p>
          )}

          <input
            type='text'
            name='country'
            placeholder='Country'
            defaultValue={state?.inputs?.country}
            className={`input ${state?.errors?.country && 'border-red-500'}`}
          />
          {state?.errors?.country && (
            <p className='error mb-2 -mt-2'>{state.errors.country[0]}</p>
          )}
          <button
            className='w-full bg-black/70 p-4 hover:bg-black text-white'
            type='submit'
            disabled={isPending}
          >
            {isPending ? 'Submitting' : 'Submit'}
          </button>

          {state?.success && <p className='success'>{state.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;

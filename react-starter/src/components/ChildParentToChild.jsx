import React, { useState } from 'react';

// The ChildComponent receives data via its `props` object.
// Here, we are destructuring `message` from the props.
export default function ChildComponent(props) {

  return (
    <div className='p-5 my-2 rounded-lg border-2 border-blue-400 bg-blue-50'>
      <h3 className='text-lg font-semibold text-gray-800'>Child Component</h3>
      <p className='mt-2 text-gray-700'>
        The message from my parent is:
        <span className='font-mono p-1 bg-blue-200 rounded ml-2'>
          {props.message}
        </span>
        <span className='font-mono p-1 bg-blue-200 rounded ml-2'>
          {props.constMessage}
        </span>
      </p>
    </div>
  );
}
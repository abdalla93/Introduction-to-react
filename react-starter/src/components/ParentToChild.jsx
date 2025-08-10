import React, { useState } from 'react';
import ChildComponent from './ChildParentToChild';

// The ParentComponent holds the data and passes it down.
export default function ParentComponent() {
  // This state is the data we want to pass to the child.
  const [messageForChild] = useState('You got this!');
  const constMessageForChild = 'You got this! as constant';

  return (
    <div className='max-w-md mx-auto mt-10 p-5 rounded-lg border-2 border-purple-400 bg-purple-100'>
      <h2 className='text-xl font-bold text-gray-800'>Parent Component</h2>
      <p className='mt-2 text-gray-700'>I am sending a message to my child.</p>
      {/* We pass the `messageForChild` state as a prop named `message` 
        to the ChildComponent.
      */}
      <ChildComponent
        message={messageForChild}
        constMessage={constMessageForChild}
      />
    </div>
  );
}

import React, { useState } from 'react';
import ChildComponent from './ChildToParentChild';

// The ParentComponent defines the state and the function to update it.
export default function ChildToParent() {
  // This state will be updated by the child.
  const [messageFromChild, setMessageFromChild] = useState('No message yet.');

  // This function will be passed down to the child.
  // When the child calls it, this parent's state will update.
  const handleMessageFromChild = (newMessage) => {
    setMessageFromChild(newMessage);
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-5 rounded-lg border-2 border-yellow-400 bg-yellow-100'>
      <h2 className='text-xl font-bold text-gray-800'>Parent Component</h2>
      <p className='mt-2 text-gray-700'>
        Message from child:
        <span className='font-mono p-1 bg-yellow-200 rounded ml-2'>
          {messageFromChild}
        </span>
      </p>

      {/* Pass the handler function down to the child as a prop */}
      <ChildComponent sendMessageUp={handleMessageFromChild} />
    </div>
  );
}

import React, { useState } from 'react';

// The ChildComponent receives data via its `props` object.
// Here, we are destructuring `message` from the props.
function ChildComponent({ message }) {
  const childStyle = {
    padding: '20px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '2px solid #60a5fa', // blue-400
    backgroundColor: '#eff6ff', // blue-50
  };

  return (
    <div style={childStyle}>
      <h3 className="text-lg font-semibold text-gray-800">Child Component</h3>
      <p className="mt-2 text-gray-700">
        The message from my parent is: 
        <span className="font-mono p-1 bg-blue-200 rounded ml-2">{message}</span>
      </p>
    </div>
  );
}

// The ParentComponent holds the data and passes it down.
export default function ParentComponent() {
  // This state is the data we want to pass to the child.
  const [messageForChild] = useState("You got this!");

  const parentStyle = {
    padding: '20px',
    borderRadius: '8px',
    border: '2px solid #a78bfa', // violet-400
    backgroundColor: '#f5f3ff', // violet-50
  };

  return (
    <div style={parentStyle} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold text-gray-800">Parent Component</h2>
      <p className="mt-2 text-gray-700">I am sending a message to my child.</p>
      
      {/* We pass the `messageForChild` state as a prop named `message` 
        to the ChildComponent.
      */}
      <ChildComponent message={messageForChild} />
    </div>
  );
}

import React, { useState } from 'react';

// The ChildComponent receives the `sendMessageUp` function as a prop.
function ChildComponent({ sendMessageUp }) {
  const [inputValue, setInputValue] = useState('');

  const childStyle = {
    padding: '20px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '2px solid #34d399', // emerald-400
    backgroundColor: '#ecfdf5', // emerald-50
  };

  // When the button is clicked, call the function from the parent
  // and pass the current input value as the argument.
  const handleClick = () => {
    if (inputValue.trim()) {
      sendMessageUp(inputValue);
      setInputValue(''); // Clear input after sending
    }
  };

  return (
    <div style={childStyle}>
      <h3 className="text-lg font-semibold text-gray-800">Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a message for parent"
        className="mt-2 w-full p-2 border text-gray-800 rounded"
      />
      <button
        onClick={handleClick}
        className="mt-2 px-4 py-2 bg-emerald-500 text-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
      >
        Send Message to Parent
      </button>
    </div>
  );
}

// The ParentComponent defines the state and the function to update it.
export default function ChildToParent() {
  // This state will be updated by the child.
  const [messageFromChild, setMessageFromChild] = useState('No message yet.');

  const parentStyle = {
    padding: '20px',
    borderRadius: '8px',
    border: '2px solid #fbbf24', // amber-400
    backgroundColor: '#fefce8', // amber-50
  };

  // This function will be passed down to the child.
  // When the child calls it, this parent's state will update.
  const handleMessageFromChild = (newMessage) => {
    setMessageFromChild(newMessage);
  };

  return (
    <div style={parentStyle} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold text-black-800">Parent Component</h2>
      <p className="mt-2 text-gray-700">
        Message from child: 
        <span className="font-mono p-1 bg-amber-200 rounded ml-2">{messageFromChild}</span>
      </p>
      
      {/* Pass the handler function down to the child as a prop */}
      <ChildComponent sendMessageUp={handleMessageFromChild} />
    </div>
  );
}

import React, { useState } from 'react';

// The ChildComponent receives the `sendMessageUp` function as a prop.
export default function ChildComponent({ sendMessageUp }) {
  const [inputValue, setInputValue] = useState('');

  // When the button is clicked, call the function from the parent
  // and pass the current input value as the argument.
  const handleClick = () => {
    if (inputValue.trim()) {
      sendMessageUp(inputValue);
      setInputValue(''); // Clear input after sending
    }
  };

  return (
    <div className='p-5 my-2 rounded-lg border-2 border-green-400 bg-green-100'>
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
        className="mt-2 px-4 py-2 bg-green-500 text-gray-800 rounded-lg hover:bg-green-600 transition-colors"
      >
        Send Message to Parent
      </button>
    </div>
  );
}
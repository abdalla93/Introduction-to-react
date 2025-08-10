import React,{ useState } from 'react';

function Declatative() {
  const [clicked, setClicked] = useState(false);

  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? 'Clicked!' : 'Click Me'}
    </button>
  );
}

export default Declatative;

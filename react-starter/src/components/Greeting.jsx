import React from 'react';
function Greeting() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;

  // Or using a ternary operator (very common in JSX)
//   return <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>;
}

export default Greeting;
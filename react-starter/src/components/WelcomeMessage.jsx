import React, { useEffect } from 'react';

export default function WelcomeMessage() {
  const name = "Abdallah";
  // useEffect(() => {
  //   console.log("Component has mounted!");
  // }, []); // empty array → run only once when the page loads

  return <h1>Welcome, {name}</h1>
}
import React, { useEffect } from 'react';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(`Count changed to: ${count}`);
  // }, [count]); // runs every time "count" changes
 
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

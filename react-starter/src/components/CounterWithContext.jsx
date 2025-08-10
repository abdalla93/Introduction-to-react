import { CounterContext } from '@/context/CounterProvider';
import React, { useContext } from 'react';

export default function CounterWithContext() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
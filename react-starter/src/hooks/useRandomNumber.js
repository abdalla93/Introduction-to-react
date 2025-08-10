import React, { useState, useEffect } from 'react';

export default function useRandomNumber(min = 1, max = 100) {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(random);
  }, [min, max]);

  return number;
}

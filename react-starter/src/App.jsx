import React from 'react';
import Routes from '@/routes/Routes';
import { CounterProvider } from '@/context/CounterProvider';

export default function App() {
  return (
    <CounterProvider>
      <Routes />
    </CounterProvider>
  );
}

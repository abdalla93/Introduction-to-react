import React from 'react';

export default function ItemList() {
const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  return (
    <>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

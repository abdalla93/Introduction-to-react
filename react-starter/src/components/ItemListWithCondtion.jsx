import React from 'react';

export default function ItemListWithCondtion() {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
  return (
    <>
      <h2>Item List</h2>
      {items.length === 0 ? <p>No items available.</p> : null}
      {items.length === 0 && <p>No items available.</p>}
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

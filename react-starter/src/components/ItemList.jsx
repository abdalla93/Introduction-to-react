import React from 'react';

export default function ItemList(props) {
  return (
    <>
      <h2>Item List</h2>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

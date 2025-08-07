import React from 'react';

export default function ItemListWithCondtion(props) {
  return (
    <>
      <h2>Item List</h2>
      {props.items > 0 ? (
        <ul>
          {props.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items available.</p>
      )}
    </>
  );
}

import React from 'react';
import "./DisplayComponent.css"
const DisplayComponent = ({ displayedItems }) => {
  return (
    <div>
      <h4 className='d-name'>Display (Section 4)</h4>
      {
        displayedItems.map((item, index) => (
          <div className='item' key={index}>{item}</div>
        ))
      }
    </div>
  );
};

export default DisplayComponent;

import React from 'react';
import "./Finalview.css"
const FinalViewComponent = ({ queue, successPopup, handleEndButtonClick, handleResetButtonClick }) => {
  return (
    <div className='section-container section'>
      <div>
        <h4 className='d-name'>Queue (Section 3)</h4>
        {
          queue.map((item, index) => (
            <div className='item' key={index}>{item}</div>
          ))
        }
        {
          successPopup && (
            <div> 
              <h2>Success Popup</h2>
              <p>Queue is empty, Process completed successfully.</p>
            </div>
          )
        }
      </div>

      <div className='btn-container'>
        <button className='btnn' onClick={handleEndButtonClick}>End</button>
        <button className='btnn' onClick={handleResetButtonClick}>Reset</button>
      </div>
    </div>
  );
};

export default FinalViewComponent;

import React, { useState } from 'react';
import "./InputComponent.css"
const InputComponent = ({ inputText, setInputText, addToQueue }) => {
  return (
    <div>
      <p className='add-text'>Add From Here : </p>
      <input
        className='inputfield'
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className='btnn' onClick={addToQueue}>Add</button>
    </div>
  );
};

export default InputComponent;

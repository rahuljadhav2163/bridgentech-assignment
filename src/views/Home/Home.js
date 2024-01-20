import React, { useState, useEffect } from 'react';
import InputComponent from './../../components/Input/InputComponent';
import DisplayComponent from './../../components/Displayview/DisplayComponent';
import FinalViewComponent from './../../components/Finalview/Finalview';
import "./Home.css";

const QueueExample = () => {
  const [inputText, setInputText] = useState('');
  const [queue, setQueue] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [successPopup, setSuccessPopup] = useState(false);

  const addToQueue = () => {
    setQueue([...queue, inputText]);
    setInputText('');
  };

  const pollQueue = () => {
    if (queue.length > 0) {
      const polledItem = queue.shift();
      setDisplayedItems([...displayedItems, polledItem]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      pollQueue();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [queue, displayedItems]);

  const handleEndButtonClick = () => {
    if (queue.length === 0) {
      setSuccessPopup(true);
    } else {
      const waitInterval = setInterval(() => {
        if (queue.length === 0) {
          setSuccessPopup(true);
          clearInterval(waitInterval);
        }
      }, 1000);
    }
  };

  const handleResetButtonClick = () => {
    setInputText('');
    setQueue([]);
    setDisplayedItems([]);
    setSuccessPopup(false);
  };

  return (
    <div>
      <div className='header-container'>
        <p className='header'>🤷React To-DO Application🤷</p>
      </div>
      <div className='section-container'>
        <InputComponent inputText={inputText} setInputText={setInputText} addToQueue={addToQueue} />
        <DisplayComponent displayedItems={displayedItems} />
      </div>
      <FinalViewComponent
        queue={queue}
        successPopup={successPopup}
        handleEndButtonClick={handleEndButtonClick}
        handleResetButtonClick={handleResetButtonClick}
      />
    </div>
  );
};

export default QueueExample;

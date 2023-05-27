import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import { startTyping, stopTyping, keyPress, reset } from './actions';

function App() {
  const [currentKey, setCurrentKey] = useState('');
  const dispatch = useDispatch();
  const { isTyping, keyCount, accuracy } = useSelector(state => state);
  console.log("Line 9 ",accuracy);

  useEffect(() => {
    if (isTyping) {
      document.addEventListener('keydown', handleKeyPress);
      document.addEventListener('keyup', handleKeyUp);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isTyping]);

  const handleKeyPress = (event) => {
    const key = event.key.toLowerCase();
    dispatch(keyPress(key));
    setCurrentKey(key);
  };

  const handleKeyUp = () => {
    setCurrentKey('');
  };

  const startPractice = () => {
    dispatch(startTyping());
  };

  const stopPractice = () => {
    dispatch(stopTyping());
  };

  const resetPractice = () => {
    dispatch(reset());
  };

  return (
    <div className="container">
      <h1>Touch Typing Practice</h1>
      <p>Type the highlighted key:</p>
      <div id="keyboard">
        <div className="row">
          <button className={`key ${currentKey === 'a' && 'highlighted'}`}>a</button>
          <button className={`key ${currentKey === 's' && 'highlighted'}`}>s</button>
          <button className={`key ${currentKey === 'd' && 'highlighted'}`}>d</button>
          <button className={`key ${currentKey === 'f' && 'highlighted'}`}>f</button>
        </div>
        <div className="row">
          <button className={`key ${currentKey === 'j' && 'highlighted'}`}>j</button>
          <button className={`key ${currentKey === 'k' && 'highlighted'}`}>k</button>
          <button className={`key ${currentKey === 'l' && 'highlighted'}`}>l</button>
          <button className={`key ${currentKey === ';' && 'highlighted'}`}>;</button>
        </div>
      </div>
      <div className="stats">
        <p>Keys Pressed: {keyCount}</p>
        <p>Accuracy: {accuracy.toFixed(2)}%</p>
      </div>
      <div className="buttons">
        {!isTyping ? (
          <button onClick={startPractice}>Start</button>
        ) : (
          <>
            <button onClick={stopPractice}>Stop</button>
            <button onClick={resetPractice}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

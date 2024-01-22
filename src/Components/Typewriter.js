



import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, infinite }) => {
  const [myText, setMyText] = useState('');
  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (myIndex < text.length) {
      timeout = setTimeout(() => {
        setMyText((prevText) => prevText + text[myIndex]);
        setMyIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setMyIndex(0);
      setMyText('');
    }

    return () => clearTimeout(timeout);
  }, [myIndex, delay, infinite, text]);

  return <span>{myText}</span>;
};

export default Typewriter;

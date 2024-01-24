// TypingComponent.jsx

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const MyTyped = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Pay Small Small', 'Pay Gradually'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy(); // cleanup to prevent memory leaks
    };
  }, []);

  return <span ref={typingRef}></span>;
};

export default MyTyped;

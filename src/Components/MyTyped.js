import React, { useEffect } from 'react';
import Typed from 'typed.js';

const MyTyped = () => {
  useEffect(() => {
    const options = {
      strings: ['Pay Small Small', 'Pay Gradually'],
      typeSpeed: 130,
      backSpeed: 55,
      loop: true,
    };

    const typed = new Typed('.typewriter', options);

    return () => {
      // Cleanup on component unmount
      typed.destroy();
    };
  }, []);

  return <h1 className="typewriter"></h1>;
};

export default MyTyped;

import React, { useState, useEffect } from 'react';

const ClickEffect = () => {
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setClickCoords({ x, y });
      setShowCircle(true);

      setTimeout(() => {
        setShowCircle(false);
      }, 300);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {showCircle && (
        <div
          className="absolute bg-purple-300 rounded-full opacity-75 animate-ping"
          style={{
            width: '20px',
            height: '20px',
            top: clickCoords.y - 25,
            left: clickCoords.x - 25,
          }}
        ></div>
      )}
    </div>
  );
};

export default ClickEffect;

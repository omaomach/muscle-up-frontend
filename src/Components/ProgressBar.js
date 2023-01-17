import React, { useState } from 'react';
import './ProgressBar.css';

function ProgressBar({ progress }) {
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);

  const circumference = 2 * Math.PI * 100;

  React.useEffect(() => {
    setStrokeDashoffset(circumference * (1 - progress / 100));
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <svg viewBox="0 0 200 200">
        <circle
          className="progress-bar-background"
          cx="100"
          cy="100"
          r="100"
        />
        <circle
          className="progress-bar-foreground"
          cx="100"
          cy="100"
          r="100"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
}

export default ProgressBar;

import React, { useState } from 'react';

const AngleSelector = () => {
  const [currentAngle, setCurrentAngle] = useState(0);

  const handleAngleChange = (event) => {
    setCurrentAngle(parseInt(event.target.value));
  };

  // Your custom styles
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
      height: '100vh',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      marginBottom: '15px',
    },
    radio: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.body}>
      <label htmlFor="angleInput" style={styles.label}>
        Enter Angle in Degrees (0-360):
      </label>
      <input
        type="number"
        id="angleInput"
        min="0"
        max="360"
        value={currentAngle}
        onChange={handleAngleChange}
        style={styles.input}
      />
      <input
        type="range"
        id="angleSlider"
        min="0"
        max="360"
        value={currentAngle}
        onChange={handleAngleChange}
        style={styles.input}
      />

      <div>
        {[0, 45, 60, 90, 180].map((angle) => (
          <label key={angle}>
            <input
              type="radio"
              name="commonAngles"
              value={angle}
              checked={currentAngle === angle}
              onChange={handleAngleChange}
              style={styles.radio}
            />
            {angle}°
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;

import React, { useState } from 'react';
import './RadioButtons.css'; // Make sure to create this CSS file

export interface radioButtonProps {
  setVari: React.Dispatch<React.SetStateAction<string>>; // Update to string for flexibility
  vari: string; // Store the current selected value as string for any option
  options: { label: string; value: string }[]; // Array of options with label and value
  groupName: string; // Unique name for the radio group
}
// Claude AI is amazing, imma be using this for a while. Its having me actually laern shit

// GUYS IM ACCTUALLY LEARNING HOW TO USE AN AI EFFECTIVE, THIS CODE WAS A COMBO OF CHATGPT AND CLAUDE AI 
const RadioButtons: React.FC<radioButtonProps> = ({vari, setVari, options, groupName} : radioButtonProps) => {
  return (
    <div className="radio-group">
      <p className="radio-title"><strong>{groupName}</strong></p>
      {options.map((option) => (
        <label className="radio-label" key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={vari === option.value}
            onChange={() => setVari(option.value)}
            name={groupName} // Use the group name for all inputs
            className="radio-input"
          />
          <span className="radio-custom"></span>
          <span className="radio-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export type Option = { label: string; value: string }[];

export default RadioButtons;
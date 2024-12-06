import React from 'react';
import './css/SideBarNew.css';
import buttonProperties from '../Buttons/ButtonList.jsx'

const SideBarNew = ({ onAddNode }) => {

  const deepCopy = (data) => {
    return JSON.parse(JSON.stringify(data)); 
  };


  return (
    <div className="button-container">
      {Object.keys(buttonProperties).map((key) => {
        const button = buttonProperties[key];
        return (
          <div
            key={key}
            className="button-card"
            onClick={() => onAddNode(deepCopy(button.nodeProps))} // Use deep copy here
          >
            {button.label}
          </div>
        );
      })}
    </div>
  );
};

export default SideBarNew;

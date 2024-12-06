import React from 'react';
import './css/SideBarNew.css';
import buttonProperties from '../Buttons/ButtonList.jsx'
import { Handle,useHandleConnections } from '@xyflow/react';



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
            onClick={() => onAddNode(deepCopy(button.nodeProps))} 
          >
            {button.label}
          </div>
        );
      })}
    </div>
  );
};

export default SideBarNew;

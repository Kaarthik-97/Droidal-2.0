import exportAsJSON from "../Sections/JsonExport"
import {
    ControlButton,
    Controls,
  } from '@xyflow/react';
import "./css/TopButton.css"



const copyToClipboard = (nodes, edges) => {
    const data = { nodes, edges }; // Combine nodes and edges into one object
    const jsonString = JSON.stringify(data, null, 2); // Serialize with formatting
    navigator.clipboard
      .writeText(jsonString)
      .then(() => {
        alert('Data copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

const TopButton =(nodes, edges)=>{
return(
    <>
        <img
      className="TopNavButtonCC"
      onClick={() => copyToClipboard(nodes, edges)}
      src="/copy (1).png"
    />
         <img
      className="TopNavButtonEP"
      onClick={() => exportAsJSON(nodes, edges)}
      src="/download.png"
    />
    
    
    </>
)
}

export default TopButton
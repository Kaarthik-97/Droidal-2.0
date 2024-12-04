import exportAsJSON from "../Sections/JsonExport"
import {
    ControlButton,
    Controls,
  } from '@xyflow/react';
import "./css/TopButton.css"
import importFromJSON from "../Sections/JsonImport";



const copyToClipboard = (nodes, setNodes , setEdges, edges) => {
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


  const handlePaste = async (setNodes, setEdges) => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      importFromJSON(clipboardText, setNodes, setEdges);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };


const TopButton =(nodes,setNodes,setEdges, edges)=>{
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
         <img
      className="TopNavButtonPT"
      onClick={() => handlePaste(setNodes, setEdges)}
      src="/icons8-paste-50.png"
    />

    </>
)
}

export default TopButton
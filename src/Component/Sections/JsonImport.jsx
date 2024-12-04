

const importFromJSON = (json, setNodes, setEdges) => {
    try {
      const flowData = JSON.parse(json); 
      if (flowData.nodes && flowData.edges) {
        setNodes(flowData.nodes); 
        setEdges(flowData.edges); 
      } else {
        alert('Invalid JSON structure!'); 
      }
    } catch (error) {
      alert('Error parsing JSON: ' + error.message); 
    }
  };
  
  export default importFromJSON;
  
const handleExport = (nodes, edges) => {

    const startNode = nodes.find((node) => node.data.label === 'start'); // Replace with your criteria
  
    if (!startNode) {
      console.error('Start node not found!');
      return;
    }
  
    const visited = new Set();
    const result = [];
  
    const traverse = (nodeId) => {
      if (visited.has(nodeId)) return;
      visited.add(nodeId);
  
      // Find the node by ID
      const currentNode = nodes.find((node) => node.id === nodeId);
      if (currentNode) {
        // Add node data to the result
        const filteredData = Object.keys(currentNode.values || {}).reduce((acc, key) => {
          if (currentNode.values[key] !== undefined && currentNode.values[key] !== null) {
            acc[key] = currentNode.values[key];
          }
          return acc;
        }, {});
        const label = currentNode.data.label ? currentNode.data.label : "";
        result.push({[label]:filteredData});
  
        // Find the edges originating from the current node
        const connectedEdges = edges.filter((edge) => edge.source === nodeId);
  
        // Recursively traverse connected nodes
        connectedEdges.forEach((edge) => traverse(edge.target));
      }
    };
  
    // Start traversal from the start node
    traverse(startNode.id);
  
    const jsonOutput = JSON.stringify(result, null, 2);
    return jsonOutput
  };

export default handleExport
  
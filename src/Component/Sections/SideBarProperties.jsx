import React, { useState, useEffect } from 'react';

const SideBarProperties = ({ selectedNode, updateNodeProperties }) => {
  // State to store the current properties of the selected node
  const [nodeData, setNodeData] = useState(selectedNode ? selectedNode.data : {});

  // Update local state if selectedNode changes
  useEffect(() => {
    if (selectedNode && selectedNode) {
      setNodeData(selectedNode.data);
    }
  }, [selectedNode]);

  // Handle input changes to update the local state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNodeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Optionally, if you want to push updates back to parent or other parts of your app
    if (updateNodeProperties) {
      updateNodeProperties(selectedNode.id, name, value);
    }
  };

  if (!selectedNode || !selectedNode) {
    return <div>No node selected</div>;
  }

  return (
    <div className="NodeProperties">
      <div className="NodeTitle">
        <h3>Node Properties</h3>
        <p>{nodeData?.label || "No label"}</p>
      </div>
      <div className="NodeBody">
        <strong>ID:</strong> {selectedNode.id}

        <div>
          {Object.keys(nodeData).map((key) => (
            <div key={key} className="PropertyRow">
              <label>{key}:</label>
              <input
                type="text"
                name={key}
                value={nodeData[key] || ""}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarProperties;

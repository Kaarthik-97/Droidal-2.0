import React, { useState, useEffect } from 'react';
import SelectInput from '../Buttons/SelectInput';
import RadioInput from '../Buttons/RadioInput';
import TextInput from '../Buttons/TextInput';

const SideBarProperties = ({ selectedNode, updateNodeProperties }) => {
  // State to store the current properties of the selected node
  const [nodeData, setNodeData] = useState(selectedNode ? selectedNode.data : {});




  // Update local state if selectedNode changes
  useEffect(() => {
    if (selectedNode && selectedNode) {
      setNodeData(selectedNode.data);
    }
  }, [selectedNode]);





  // // Handle input changes to update the local state
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNodeData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));

  //   // Optionally, if you want to push updates back to parent or other parts of your app
  //   if (updateNodeProperties) {
  //     updateNodeProperties(selectedNode.id, name, value);
  //   }
  // };


 

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    
    setNodeData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        selectedValue: value,
      }
    }));
  
    // Optionally, update the parent component
    if (updateNodeProperties) {
      updateNodeProperties(selectedNode.id, key, value);
    }
  };
  





  if (!selectedNode || !selectedNode) {
    return <div>No node selected</div>;
  }





  return (
    <div className="NodeProperties">
      <div className="NodeBody">
        {Object.keys(nodeData).map((key) => {
          const field = nodeData[key];

          return (
            <div key={key} className="PropertyRow">
              <label>{key}:</label>

              {/* Check for the type of the field and render accordingly */}
              {field?.type === 'select' ? (
                
                <select
                  name={key}
                  value={field.value}
                  onChange={(e) => handleInputChange(e, key)}
                >
                  {field?.options?.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field?.type === 'radio' ? (
                <div>
                  {field?.options?.map((option, idx) => (
                    <label key={idx}>
                      <input
                        type="radio"
                        name={key}
                        value={option}
                        checked={field.selectedValue === option}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ) : (
                
                <input
                  type="text"
                  name={key}
                  value={field.selectedValue || ''}
                  onChange={(e) => handleInputChange(e, key)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

      

export default SideBarProperties;

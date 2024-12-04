import React, { useCallback,useState,useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import initialNodes from './Sections/Init_nodes';
import initialEdges from './Sections/Init_edges';
import onNodeDoubleClickHandler from './Sections/DoubleClick';
import SideBarNew from './Sections/SideBarNew';
import '@xyflow/react/dist/style.css';
import SideBarProperties from './Sections/SideBarProperties';

 
const MainWorkSpace = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);

 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  const addNode = (nodeProps) => {
    setNodes((nds) => [
      ...nds,
      {
        id: (nds.length + 1).toString(), 
        position: { x: Math.random() * 250, y: Math.random() * 250 },
        ...nodeProps,
      },
    ]);
  };





  const onEdgeClick = (event, edge) => {
    setSelectedEdge(edge); // Set the selected edge when clicked
    console.log(`Edge clicked: ${edge.id}`);
  };



  const onNodeDoubleClick = (event, node) => {
    onNodeDoubleClickHandler(event, node, setSelectedNode); 
  };
  const onPaneClick = () =>{
    setSelectedNode(null)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Delete' && selectedEdge) {
        deleteEdge(selectedEdge.id);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedEdge]);

  const deleteEdge = (edgeId) => {
    // Filter out the edge by its id and update the edges state
    const newEdges = edges.filter((edge) => edge.id !== edgeId);
    setEdges(newEdges);
    setSelectedEdge(null); // Clear the selected edge after deletion
  };




  return (
    <>
    <div style={{ width: '80vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={onPaneClick}
        onEdgeClick={onEdgeClick}
        // onNodeClick={onNodeDoubleClick}
        onNodeDoubleClick={onNodeDoubleClick}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
    <div
        className="Properties"
        style={{
          flex: 1,
          padding: '10px',
          borderLeft: '1px solid #ccc',
          overflow: 'auto', 
        }}
      >
        
        {selectedNode ? (
        <SideBarProperties selectedNode = {selectedNode}/>): 
        (<SideBarNew onAddNode = {addNode}/>)
}
</div>
</>
  );
};
export default MainWorkSpace




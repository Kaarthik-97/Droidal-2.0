import React, { useRef,useCallback,useState,useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
// import initialNodes from './Sections/Init_nodes';
// import initialEdges from './Sections/Init_edges';
import onNodeDoubleClickHandler from './Sections/DoubleClick';
import SideBarNew from './Sections/SideBarNew';
import '@xyflow/react/dist/style.css';
import SideBarProperties from './Sections/SideBarProperties';
import TopButton from './Buttons/TopButton';
import importFromJSON from './Sections/JsonImport';
import BiDirectionalNode from './Sections/BiDirectionalNode.tsx';
import TriDirectionalNode from './Sections/TriDirectionalNode.tsx';
 
const MainWorkSpace = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const workspaceRef = useRef(null); 
  //  const [center, setCenter] = useState({ x: 0, y: 0 });

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true }, eds),
      ),
    []
  );

  const getBottomMostNode = () => {
    const bottomMostNode = nodes.reduce((prev, current) => {
      return (prev.position.y > current.position.y) ? prev : current;
    });
    return bottomMostNode;
  };


  const centerOfViewport = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };




  const nodeTypes = {
    bidirectional: BiDirectionalNode,
    tridirectional:TriDirectionalNode,
  };
 
  const addNode = (nodeProps) => {
    
    if (nodes.length != 0){
      let bottomMostNode = getBottomMostNode();
    setNodes((nds) => [
      ...nds,
      {
        id: (nds.length + 1).toString(), 
        position: { x:bottomMostNode.position.x, y:bottomMostNode.position.y+60},
        ...nodeProps,
      },
    ]);
  }
  else{
    setNodes((nds) => [
      ...nds,
      {
        id: (nds.length + 1).toString(), 
        position: { x:centerOfViewport.x, y: centerOfViewport.y},
        ...nodeProps,
      },
    ]);
  }
}

  const onEdgeClick = (event, edge) => {
    setSelectedEdge(edge);
  };


  const onNodeDoubleClick = (event, node) => {
    onNodeDoubleClickHandler(event, node, setSelectedNode); 
  };

  const onPaneClick = () =>{
    setSelectedNode(null)
  }

  useEffect(() => {
    const handlePaste = (event) => {
      const pastedText = event.clipboardData.getData('Text'); // Get the pasted text
      importFromJSON(pastedText, setNodes, setEdges); // Attempt to parse and import the JSON
    };



    const handleKeyDown = (event) => {
      if (event.key === 'Delete' && selectedEdge) {
        deleteEdge(selectedEdge.id);
      }
      if(event.key === 'Delete' && selectedNode){
        deleteNode(selectedNode.id)
      }
    };

    if (workspaceRef.current) {
      workspaceRef.current.addEventListener('paste', handlePaste); // Handle paste event
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.removeEventListener('paste', handlePaste); // Remove paste listener
      }
      document.removeEventListener('keydown', handleKeyDown); // Remove keydown listener
    };
  }, [selectedEdge, selectedNode]);





  const deleteEdge = (edgeId) => {
    const newEdges = edges.filter((edge) => edge.id !== edgeId);
    setEdges(newEdges);
    setSelectedEdge(null); 
  };

  const deleteNode = (nodeId) => {

    const newNodes = nodes.filter((node) => node.id !== nodeId);
    setNodes(newNodes);

    const newEdges = edges.filter(
      (edge) => edge.source !== nodeId && edge.target !== nodeId
    );
    setEdges(newEdges);

    setSelectedNode(null); 
  };


  const updateNodeProperties = (nodeId, key, value) => {
    if (selectedNode) {
      const updatedNode = { ...selectedNode };
      updatedNode.data[key] = value;
      setSelectedNode(updatedNode);
    }
  };


  
  return (
    <>
    <div style={{ width: '89vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onPaneClick={onPaneClick}
        onEdgeClick={onEdgeClick}
        onNodeClick={onNodeDoubleClick}
        // onNodeMouseEnter={onNodeMouseEnter}
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
          <>
          
        <SideBarProperties selectedNode = {selectedNode} updateNodeProperties={updateNodeProperties}/>
        </>): 
        (
        <><TopButton nodes={nodes} edges={edges} setNodes = {setNodes} setEdges = {setEdges} />
        <SideBarNew onAddNode = {addNode}/>
        </>)
}
</div>
</>
  );
};
export default MainWorkSpace




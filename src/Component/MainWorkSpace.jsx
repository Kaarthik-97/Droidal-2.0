import React, { useRef, useCallback, useState, useEffect } from 'react';
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
import TopButton from './Buttons/TopButton';
import importFromJSON from './Sections/JsonImport';

const MainWorkSpace = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const workspaceRef = useRef(null);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true }, eds),
      ),
    [],
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
    setSelectedEdge(edge);
  };

  const onNodeDoubleClick = (event, node) => {
    onNodeDoubleClickHandler(event, node, setSelectedNode);
  };

  const onPaneClick = () => {
    setSelectedNode(null);
  };

  useEffect(() => {
    const handlePaste = (event) => {
      const pastedText = event.clipboardData.getData('Text'); // Get the pasted text
      importFromJSON(pastedText, setNodes, setEdges); // Pass to importFromJSON to update nodes and edges
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Delete' && selectedEdge) {
        deleteEdge(selectedEdge.id);
      }
      if (event.key === 'Delete' && selectedNode) {
        deleteNode(selectedNode.id);
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
    // Filter out the edge by its id and update the edges state
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
          onNodeClick={onNodeDoubleClick}
          onNodeDoubleClick={onNodeDoubleClick}
        >
          <TopButton nodes={nodes} edges={edges} />
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
          <SideBarProperties selectedNode={selectedNode} />
        ) : (
          <SideBarNew onAddNode={addNode} />
        )}
      </div>
    </>
  );
};

export default MainWorkSpace;

const buttonProperties = {
    addNodeA: {
      label: 'For',
      nodeProps: {
        data: { label: 'For' },
        style: { backgroundColor: 'lightblue' },
      },
    },
    addNodeB: {
      label: 'If',
      nodeProps: {
        data: { label: 'if' },
        style: { backgroundColor: 'lightgreen' },
        
      },
    },
    addNodeC: {
      label: 'Else',
      nodeProps: {
        data: { label: 'else' },
        style: { backgroundColor: 'lightcoral' },
      },
      
    },
    addNodeD: {
      label: 'While',
      nodeProps: {
        data: { label: 'While' },
        type: 'bidirectional',
        style: { backgroundColor: 'lightcoral' },
      },
    },
  };

  export default buttonProperties

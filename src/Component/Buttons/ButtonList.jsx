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
        type:'tridirectional',
        
        style: { backgroundColor: 'lightgreen',border: '1px solid black',borderRadius: '8px' },
        
      },
    },
    addNodeC: {
      label: 'Else',
      nodeProps: {
        data: { label: 'else' },
        style: { backgroundColor: 'lightcoral',  fontSize: '14px',padding: '10px',  },
      },
      
    },
    addNodeD: {
      label: 'While',
      nodeProps: {
        data: { label: 'While' },
        type: 'bidirectional',
        style: {backgroundColor: 'lightcoral',border: '1px solid black',borderRadius: '8px'},
      },
    },
  };

  export default buttonProperties

import buttonContent from "./ButtonContent";
import buttonValue from "./ButtonValues";

const buttonProperties = {
    addNode1: {
      label: 'For',
      nodeProps: {
        data: { label: 'For'},
        style: { backgroundColor: 'lightblue' },
      },
    },
    addNode2: {
      label: 'If',
      nodeProps: {
        data: { label: 'if' },
        type:'tridirectional',
        style: { backgroundColor: 'lightgreen',border: '1px solid black',borderRadius: '8px' },
      },
    },
    addNode3: {
      label: 'Else',
      nodeProps: {
        data: { label: 'else' },
        style: { backgroundColor: 'lightcoral',  fontSize: '14px',padding: '10px',  },
      },
    },
    addNode4: {
      label: 'While',
      nodeProps: {
        data: { label: 'While' },
        type: 'bidirectional',
        style: {backgroundColor: 'lightcoral',border: '1px solid black',borderRadius: '8px'},
        values:{value :"while"},
      },
    },    
    addNode5: {
      
      label: 'Start',
      nodeProps: {
        data: {label: 'start' },
        style: {backgroundColor: 'lightgreen',border: '1px solid black',borderRadius: '8px'},
        values:{value:"start"}
      },
    },
    addNode6: {
      label: 'Open Browser',
      nodeProps: {
        data: { label: 'Open Browser',...buttonContent.OpenBrowser },
        style: {backgroundColor: 'lightblue',border: '1px solid black',borderRadius: '8px'},
        values:{ ...buttonValue.OpenBrowser },
      },
    },
    addNode7: {
      label: 'Element Wait',
      nodeProps: {
        data: { label: 'Element Wait',...buttonContent.ElementWait },
        style: {backgroundColor: 'lightblue',border: '1px solid black',borderRadius: '8px'},
      },
    },
    addNode8: {
      label: 'Click',
      nodeProps: {
        data: { label: 'Click',...buttonContent.Click },
        style: {backgroundColor: 'lightblue',border: '1px solid black',borderRadius: '8px'},
      },
    },
    addNode9: {
      label: 'Type Into',
      nodeProps: {
        data: { label: 'Type Into',...buttonContent.TypeInto },
        style: {backgroundColor: 'lightblue',border: '1px solid black',borderRadius: '8px'},
      },
    },

  };

  export default buttonProperties

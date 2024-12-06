import buttonContent from "./ButtonContent";
import buttonValue from "./ButtonValues";

const buttonProperties = {
  Webactivities:{
    addNode1: {
      label: 'For',
      nodeProps: {
        data: { label: 'For'},
        type:'monodir',
        style: { backgroundColor: 'lightblue' },
      },
    },
    addNode2: {
      label: 'If',
      nodeProps: {
        data: { label: 'if' },
        type:'tridirectional',
        style: { backgroundColor: 'lightgreen'},
      },
    },
    addNode3: {
      label: 'Else',
      nodeProps: {
        data: { label: 'else' },
        type:'monodir',
        style: { backgroundColor: 'lightcoral'},
      },
    },
    addNode4: {
      label: 'While',
      nodeProps: {
        data: { label: 'While' },
        type:'monodir',
        style: {backgroundColor: 'lightcoral'},
        values:{value :"while"},
      },
    }, 
  },
    DesktopActivities:{
    addNode5: {
      
      label: 'Start',
      nodeProps: {
        data: {label: 'start' },
        type:'monodir',
        style: {backgroundColor: 'lightgreen'},
        values:{value:"start"}
      },
    },
    addNode6: {
      label: 'Open Browser',
      nodeProps: {
        type:'monodir',
        data: { label: 'Open Browser',...buttonContent.OpenBrowser },
        style: {backgroundColor: 'lightblue'},
        values:{ ...buttonValue.OpenBrowser },
      },
    },
    addNode7: {
      label: 'Element Wait',
      nodeProps: {
        type:'monodir',
        data: { label: 'Element Wait',...buttonContent.ElementWait },
        style: {backgroundColor: 'lightblue'},
      },
    },
    addNode8: {
      label: 'Click',
      nodeProps: {
        type:'monodir',
        data: { label: 'Click',...buttonContent.Click },
        style: {backgroundColor: 'lightblue'},
      },
    },
    addNode9: {
      label: 'Type Into',
      nodeProps: {
        type:'monodir',
        data: { label: 'Type Into',...buttonContent.TypeInto },
        style: {backgroundColor: 'lightblue'},
      },
    },
  },

  };

  export default buttonProperties

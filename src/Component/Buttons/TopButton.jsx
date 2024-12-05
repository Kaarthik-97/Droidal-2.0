import handleExport from '../Sections/JsonExportBackend';
import "./css/TopButton.css"
import importFromJSON from "../Sections/JsonImport";





const exportToFile = (nodes, edges) =>{
    let jsonOutput = handleExport(nodes,edges)
    const blob = new Blob([jsonOutput], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'reactflow-ordered-export.json';
    link.click();
    URL.revokeObjectURL(url);
}


const copyToClipboard = (nodes, edges) => {
    const data = { nodes, edges }; 
    const jsonString = JSON.stringify(data, null, 2); 
    navigator.clipboard
      .writeText(jsonString)
      .then(() => {
        alert('Data copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };


  const handlePaste = async (setNodes, setEdges) => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      importFromJSON(clipboardText, setNodes, setEdges);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };



const TopButton = ({ nodes, edges, setNodes, setEdges }) => {
  return (
    <>
      <img
        className="TopNavButtonCC"
        onClick={() => copyToClipboard(nodes, edges)}
        src="/copy (1).png"
      />
      <img
        className="TopNavButtonEP"
        onClick={() => exportToFile(nodes, edges)}
        src="/download.png"
      />
      <img
        className="TopNavButtonPT"
        onClick={()=>handlePaste({setNodes, setEdges})}  // Now, this should work as expected
        src="/icons8-paste-50.png"
      />
    </>
  );
};

export default TopButton;

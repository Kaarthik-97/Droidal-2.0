import exportAsJSON from "../Sections/JsonExport"
import {
    Controls,
  } from '@xyflow/react';
import '../Sections/css/ExportButton.css'


const TopButton =(nodes, edges)=>{
return(
<Controls>
<button
className="ExportButton"
  onClick={()=>exportAsJSON(nodes,edges)}>
  Export JSON
</button>
</Controls>
)
}

export default TopButton
import React, { memo } from 'react';
import {
  type BuiltInNode,
  type NodeProps,
  Handle,
  Position,
} from '@xyflow/react';

 
 
const TriDirectionalNode = ({ data }: NodeProps<BuiltInNode>) => {
  return (
    <div className='BiDirNode' style = {{
        fontSize: '14px',
        padding: '20px 40px', 
        cursor: 'pointer', }}>
      <Handle type="target" position={Position.Top} id="left"></Handle> 
      {data?.label}
      <Handle type="source" position={Position.Right} id="right" ><div style={{ transform: 'rotate(270deg) translateY(15px) translateX(-5px)' }}>False</div></Handle>
      <Handle type="source" position={Position.Bottom} id="bottom" ><div style={{ transform: 'translateX(-10px) translateY(10px)' }}>True</div></Handle> 
    </div>
  );
};
 
export default memo(TriDirectionalNode);
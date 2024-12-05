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
        padding: '10px 20px', 
        cursor: 'pointer', }}>
      <Handle type="target" position={Position.Left} id="left" />
      {data?.label}
      <Handle type="source" position={Position.Right} id="right" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </div>
  );
};
 
export default memo(TriDirectionalNode);
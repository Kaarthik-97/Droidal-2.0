import React, { memo } from 'react';
import {
  type BuiltInNode,
  type NodeProps,
  Handle,
  Position,
} from '@xyflow/react';

 
 
const MonoDirectionalNode = ({ data }: NodeProps<BuiltInNode>) => {
  return (
    <div className='MonoDirNode' style = {{
      fontSize: '14px', 
      padding: '10px', 
      cursor: 'pointer' }}>
      <Handle type="target" position={Position.Top} id="left" />
      {data?.label}
      <Handle type="source" position={Position.Bottom} id="right" />
    </div>
  );
};
 
export default memo(MonoDirectionalNode);
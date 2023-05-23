import { ReactElement, useCallback, useMemo } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import MessageNode from './MessageNode';
import './messagenode.css';

// import './App.css' 

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' }, type: 'messageNode' },
  { id: '2', position: { x: 300, y: 100 }, data: { label: '2' }, type: 'messageNode' },
  { id: '3', position: { x: 0, y: 200 }, data: { label: '3' }, type: 'messageNode' },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = {messageNode: MessageNode};

function App() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Edge | Connection) => 
  setEdges((eds) => {console.log(eds); return addEdge(params, eds)}), [setEdges]);
  // const nodes = initialNodes;
  // const edges = initialEdges;

  return (
  <div style={{width: '100vw', height: '100vh'}}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >


      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  </div>
  );
}

export default App

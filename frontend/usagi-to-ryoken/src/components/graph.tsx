import React, { useEffect, useRef } from 'react';
import { Network, Data, Options, Node, Edge } from 'vis-network';
import { DataSet } from 'vis-data';


interface CustomNode extends Node {
    id: string;
    label: string;
    x: number;
    y: number;
}

interface CustomEdge extends Edge {
    from: string;
    to: string;
}

const VisGraph: React.FC = () => {
    const networkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (networkRef.current) {
            const nodes: DataSet<CustomNode> = new DataSet<CustomNode>([
                { id: 'A', label: 'A', x: 0, y: -100 },
                { id: 'B', label: 'B', x: 100, y: -100 },
                { id: 'C', label: 'C', x: 200, y: -100 },
                { id: 'D', label: 'D', x: -100, y: 0 },
                { id: 'E', label: 'E', x: 0, y: 0 },
                { id: 'F', label: 'F', x: 100, y: 0 },
                { id: 'G', label: 'G', x: 200, y: 0 },
                { id: 'H', label: 'H', x: 300, y: 0 },
                { id: 'I', label: 'I', x: 0, y: 100 },
                { id: 'J', label: 'J', x: 100, y: 100 },
                { id: 'K', label: 'K', x: 200, y: 100 }
            ]);

            const edges: DataSet<CustomEdge> = new DataSet<CustomEdge>([
                { from: 'A', to: 'B' },
                { from: 'B', to: 'C' },
                { from: 'A', to: 'D' },
                { from: 'A', to: 'E' },
                { from: 'A', to: 'F' },
                { from: 'B', to: 'F' },
                { from: 'C', to: 'F' },
                { from: 'C', to: 'G' },
                { from: 'C', to: 'H' },
                { from: 'D', to: 'E' },
                { from: 'D', to: 'I' },
                { from: 'E', to: 'F' },
                { from: 'E', to: 'I' },
                { from: 'F', to: 'G' },
                { from: 'F', to: 'J' },
                { from: 'F', to: 'K' },
                { from: 'G', to: 'H' },
                { from: 'G', to: 'K' },
                { from: 'H', to: 'K' },
                { from: 'I', to: 'J' },
                { from: 'I', to: 'F' },
                { from: 'J', to: 'K' }
            ]);

            const data: Data = {
                nodes: nodes,
                edges: edges
            };

            const options: Options = {
                nodes: {
                    shape: 'circle',
                    size: 30,
                    font: {
                        size: 40
                    },
                    fixed: {
                        x: true,
                        y: true
                    },
                    color: {
                        background: 'white',
                        border: 'black'
                    }
                },
                edges: {
                    width: 2,
                    color: 'white'
                },
                physics: {
                    enabled: false
                },
                interaction: {
                    dragNodes: false,
                    dragView: false,
                    zoomView: false
                }
            };

            new Network(networkRef.current, data, options).fit();

        }
    }, []);

    return (
        <div>
            <div ref={networkRef} style={
                {
                    width: '100%',
                    height: '500px'
                }
            } />
        </div>
    );
};

export default VisGraph;
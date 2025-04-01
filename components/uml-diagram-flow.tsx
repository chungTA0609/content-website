"use client"

import { useMemo } from "react"
import ReactFlow, {
    Background,
    Controls,
    type Edge,
    Handle,
    type Node,
    type NodeProps,
    Position,
    useEdgesState,
    useNodesState,
} from "reactflow"
import "reactflow/dist/style.css"
import { cn } from "@/lib/utils"

// Custom node types
type UmlNodeData = {
    title: string
    methods: string[]
    variant: "primary" | "secondary" | "feature"
}

const UmlNode = ({ data }: NodeProps<UmlNodeData>) => {
    const variantClasses = {
        primary: "bg-background border-2 shadow-md",
        secondary: "bg-background border shadow-sm",
        feature: "bg-background border shadow-sm",
    }

    const titleClasses = {
        primary: "font-bold text-base",
        secondary: "font-bold text-sm",
        feature: "font-medium text-sm",
    }

    const methodClasses = {
        primary: "text-sm",
        secondary: "text-xs",
        feature: "text-xs",
    }

    return (
        <div className={cn("rounded-lg border min-w-[150px]", variantClasses[data.variant])}>
            <Handle type="target" position={Position.Top} className="!bg-border" />
            <div className={cn("border-b p-2 text-center", titleClasses[data.variant])}>{data.title}</div>
            {data.methods.length > 0 && (
                <div className={cn("p-2", methodClasses[data.variant])}>
                    {data.methods.map((method, index) => (
                        <div key={index}>{method}</div>
                    ))}
                </div>
            )}
            <Handle type="source" position={Position.Bottom} className="!bg-border" />
        </div>
    )
}

// Node types definition
const nodeTypes = {
    umlNode: UmlNode,
}

export function UmlDiagramFlow() {
    // Define initial nodes
    const initialNodes: Node[] = [
        {
            id: "platform",
            type: "umlNode",
            position: { x: 350, y: 0 },
            data: {
                title: "FinanceInsight Platform",
                methods: ["+ marketAnalysis()", "+ investmentStrategies()", "+ educationalContent()"],
                variant: "primary",
            },
        },
        {
            id: "market",
            type: "umlNode",
            position: { x: 150, y: 150 },
            data: {
                title: "Market Analysis",
                methods: ["+ dailyUpdates()", "+ trendAnalysis()"],
                variant: "secondary",
            },
        },
        {
            id: "investment",
            type: "umlNode",
            position: { x: 350, y: 150 },
            data: {
                title: "Investment",
                methods: ["+ portfolioBuilding()", "+ riskManagement()"],
                variant: "secondary",
            },
        },
        {
            id: "education",
            type: "umlNode",
            position: { x: 550, y: 150 },
            data: {
                title: "Education",
                methods: ["+ tutorials()", "+ webinars()"],
                variant: "secondary",
            },
        },
        {
            id: "tools",
            type: "umlNode",
            position: { x: 150, y: 300 },
            data: {
                title: "Financial Tools",
                methods: ["+ calculators", "+ planners"],
                variant: "feature",
            },
        },
        {
            id: "premium",
            type: "umlNode",
            position: { x: 350, y: 300 },
            data: {
                title: "Premium Content",
                methods: ["+ reports", "+ recommendations"],
                variant: "feature",
            },
        },
        {
            id: "community",
            type: "umlNode",
            position: { x: 550, y: 300 },
            data: {
                title: "Community",
                methods: ["+ forums", "+ expertQA"],
                variant: "feature",
            },
        },
    ]

    // Define edges
    const initialEdges: Edge[] = [
        {
            id: "platform-market",
            source: "platform",
            target: "market",
            type: "smoothstep",
            animated: false,
            style: { stroke: "hsl(var(--border))", strokeWidth: 1 },
        },
        {
            id: "platform-investment",
            source: "platform",
            target: "investment",
            type: "smoothstep",
            animated: false,
            style: { stroke: "hsl(var(--border))", strokeWidth: 1 },
        },
        {
            id: "platform-education",
            source: "platform",
            target: "education",
            type: "smoothstep",
            animated: false,
            style: { stroke: "hsl(var(--border))", strokeWidth: 1 },
        },
        {
            id: "market-tools",
            source: "market",
            target: "tools",
            type: "smoothstep",
            animated: false,
            style: { stroke: "hsl(var(--border))", strokeWidth: 1 },
        },
        {
            id: "investment-premium",
            source: "investment",
            target: "premium",
            type: "smoothstep",
            animated: false,
            style: { stroke: "hsl(var(--border))", strokeWidth: 1 },
        },
        {
            id: "education-community",
            source: "education",
            target: "community",
            type: "smoothstep",
            animated: false,
            style: { stroke: "hsl(var(--border))", strokeWidth: 1 },
        },
    ]

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    // Center the diagram on first render
    const fitViewOptions = useMemo(() => ({ padding: 0.2 }), [])

    return (
        <div className="h-[500px] w-full rounded-lg border bg-card p-6 shadow-lg">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={fitViewOptions}
                minZoom={0.5}
                maxZoom={1.5}
                defaultViewport={{ x: 0, y: 0, zoom: 1 }}
                attributionPosition="bottom-right"
            >
                <Background color="hsl(var(--muted-foreground))" gap={16} size={1} />
                <Controls />
            </ReactFlow>

            {/* Legend */}
            <div className="mt-4 flex justify-center gap-6 border-t pt-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded border-2 bg-background"></div>
                    <span>Core Component</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm border bg-background"></div>
                    <span>Feature</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-[1px] w-6 bg-border"></div>
                    <span>Relationship</span>
                </div>
            </div>
        </div>
    )
}


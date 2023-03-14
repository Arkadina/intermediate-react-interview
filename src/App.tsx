import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const files = {
        children: [
            {
                name: "node_modules",
                children: [
                    {
                        name: "joi",
                        children: [
                            {
                                name: "node_modules",
                            },
                            {
                                name: "package.json",
                            },
                        ],
                    },
                ],
            },
            {
                name: "package.json",
            },
            {
                name: "vite.config.ts",
            },
        ],
    };

    type TEntry = {
        name: string;
        children?: TEntry[];
    };

    function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
        const [isExpanded, setIsExpanded] = useState(false);
        return (
            <div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{ cursor: entry.children ? "pointer" : "initial" }}
                >
                    {entry.children && (isExpanded ? "- " : "+ ")}
                    {entry.name}
                </button>
                {isExpanded && (
                    <div style={{ paddingLeft: `${depth * 15}px` }}>
                        {entry.children?.map((entry) => (
                            <Entry entry={entry} depth={depth + 1} />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="App">
            <div className="centralize">
                {files.children.map((entry) => (
                    <Entry entry={entry} depth={1} />
                ))}
            </div>
        </div>
    );
}

export default App;

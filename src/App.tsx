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
                name: "vite.config",
            },
        ],
    };

    type TEntry = {
        name: string;
        children?: TEntry[];
    };

    function Entry({ name, children }: TEntry) {
        return <div>{name}</div>;
    }

    return (
        <div className="App">
            {files.children.map((entry) => (
                <Entry {...entry} />
            ))}
        </div>
    );
}

export default App;

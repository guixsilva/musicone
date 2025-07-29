import { useState, useEffect } from "react";
import TypeButtons from "./TypeButtons";

export default function TypeChoice() {
    const [term, setTerm] = useState('');
    const types : string[] = ["Álbuns", "Músicas", "Artistas"]
    const [selectedType, setSelectedType] = useState<string | null>(null);

    return (
        <div className="flex flex-col w-full max-w-md mx-auto">
            <div className="flex-wrap gap-2">
                {types.length > 0 ? (
                    types.map((type, index) => (
                        <TypeButtons key={index} type={type} selected={type === selectedType} onSelect={setSelectedType} />
                    ))
                ) : <p>Tente pesquisar outro termo...</p>}
            </div>
        </div>
    )
}
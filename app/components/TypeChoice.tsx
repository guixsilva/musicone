import { useState, useEffect } from "react";
import TypeButtons from "./TypeButtons";

type TypeChoiceProps = {
    selectedType: string | null;
    onSelectType: (type: string) => void;
};

export default function TypeChoice({ selectedType, onSelectType }: TypeChoiceProps) {
    const [term, setTerm] = useState('');
    const types : string[] = ["álbuns", "músicas", "artistas"]

    return (
        <div className="flex flex-col w-full max-w-md mx-auto">
            <div className="flex flex-wrap gap-2 mt-2">
                {types.length > 0 ? (
                    types.map((type, index) => (
                        <TypeButtons key={index} type={type} selected={type === selectedType} onSelect={onSelectType} />
                    ))
                ) : <p>Tente pesquisar outro termo...</p>}
            </div>
        </div>
    )
}
import GenreButton from "./GenreButton"
import { useState } from "react";
import { GradientGenerator } from "./GenreButton";

type TypeButtonProps = {
    type: string;
    selected: boolean;
    onSelect: (type: string) => void;
};

export default function TypeButtons({type, selected, onSelect}:TypeButtonProps){
    const [startColor, endColor] = GradientGenerator(type);

    return (
        <button
            type="button"
            onClick={() => onSelect(type)}
            style={{
                backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
                border: selected ? "1px solid white" : "none",
            }}
            className="flex-auto rounded-full text-white px-4 py-2 shadow-md hover:opacity-90 transition flex-initial"
        >
            {type}
        </button>
    );
}
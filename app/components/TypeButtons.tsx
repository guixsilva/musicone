import GenreButton from "./GenreButton"
import { useState } from "react";

const types : string[] = ["Álbuns", "Músicas", "Artistas"]

export default function TypeButtons(){
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    return(
            <div className="flex-wrap gap-2">
                {types.map((type, index) => (
                    <GenreButton key={index} genre={type} selected={type === selectedGenre} onSelect={setSelectedGenre}/>
                ))}
            </div>
    )
}
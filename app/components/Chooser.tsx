"use client"

import { useState } from "react";
import GenreSearch from "./GenreSearch";
import TypeChoice from "./TypeChoice";

export default function Chooser() {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    return (
        <div className="flex flex-col w-full max-w-md mx-auto space-y-3">
            <h1 className="font-bold text-3xl">Gênero musical</h1>
            <GenreSearch selected={selectedGenre} onSelectGenre={setSelectedGenre} />
            <div>
                <h1 className="font-bold text-3xl">Tipo</h1>
                <TypeChoice selected={selectedType} onSelectType={setSelectedType} />
            </div>
        </div>
    )
}
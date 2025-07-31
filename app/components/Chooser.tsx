"use client"

import { useState } from "react";
import GenreSearch from "./GenreSearch";
import TypeChoice from "./TypeChoice";

export default function Chooser() {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);

    console.log(selectedType);

    async function requestAPI(type : string){
        setLoading(true);
        setError(false);
        try {
            const res = await fetch('/api/'+type+'search', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ genre: selectedGenre }),
            });

            const data = await res.json();
            console.log("API funcionou corretamente: ", data)


        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    const handleButtonClick = async () => {
        switch (selectedType) {
            case "artistas":
                return await requestAPI("artist");
            case "álbuns":
                return await requestAPI("album");
            case "músicas":
                return await requestAPI("music");
            default:
                return;
        }
    };


    return (
        <div className="flex flex-col w-full max-w-md mx-auto space-y-3">
            <h1 className="font-bold text-3xl">Gênero musical</h1>
            <GenreSearch selected={selectedGenre} onSelectGenre={setSelectedGenre} />
            <div>
                <h1 className="font-bold text-3xl">Tipo</h1>
                <TypeChoice selectedType={selectedType} onSelectType={setSelectedType} />
            </div>
            {
                selectedGenre != null && selectedType != null ? (
                    <button type="button" className="bg-white text-black font-bold text-3x1 h-10 rounded-full" onClick={handleButtonClick}>Buscar</button>
                ) : (
                    <button type="button" className="border-2 border-white border-solid text-white font-bold text-3x1 h-10 rounded-full cursor-not-allowed" onClick={handleButtonClick}>Buscar</button>

                )
            }
        </div>
    )
}
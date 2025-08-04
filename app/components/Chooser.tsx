"use client"

import { useState } from "react";
import GenreSearch from "./GenreSearch";
import TypeChoice from "./TypeChoice";
import MusicCard from "./MusicCard";
import Header from "./Header";

export default function Chooser() {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [result, setResult] = useState<{ musicname: string; artist: string; genre: string; } | null>(null);

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);

    console.log(selectedType);

    async function requestAPI(type: string) {
        setLoading(true);
        setError(false);
        try {
            const res = await fetch('/api/' + type + 'search', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ genre: selectedGenre }),
            });

            const data = await res.json();
            console.log("API funcionou corretamente: ", data)

            setResult({
                musicname: data.nome,
                artist: data.artista,
                genre: selectedGenre || "",
            });

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
        <div>
            <Header></Header>
        <div className="flex flex-row items-center justify-center gap-8 p-4">
            <div className="flex flex-col w-full max-w-md space-y-4">
                <h1 className="font-bold text-3xl">Gênero musical</h1>
                <GenreSearch selected={selectedGenre} onSelectGenre={setSelectedGenre} />
                <div>
                    <h1 className="font-bold text-3xl">Tipo</h1>
                    <TypeChoice selectedType={selectedType} onSelectType={setSelectedType} />
                </div>
                {
                    selectedGenre && selectedType ? (
                        <button type="button" className="bg-white text-black font-bold text-3xl h-10 rounded-full" onClick={handleButtonClick}>Buscar</button>
                    ) : (
                        <button type="button" className="border-2 border-white border-solid text-white font-bold text-3xl h-10 rounded-full cursor-not-allowed" onClick={handleButtonClick}>Buscar</button>
                    )
                }
            </div>
            {result && (
                <div className="flex-shrink-0">
                    <MusicCard
                        musicname={result.musicname}
                        artist={result.artist}
                        genre={result.genre}
                    />
                </div>
            )}
        </div>
        </div>
    );

}
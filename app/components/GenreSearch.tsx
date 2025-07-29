"use client";

import { useState, useEffect } from "react";
import GenreButton from "./GenreButton";
import { Genre } from "../api/types/genre";

export default function GenreSearch() {
    const [term, setTerm] = useState('');
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);


    const TopGenres = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetch("/api/genresearch");
            const data = await res.json();
            setGenres(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        TopGenres();
    }, []);

    useEffect(() => {
        const debounce = setTimeout(async () => {
            if (term === '') {
                TopGenres();
            }
            else if (term) {
                setLoading(true);
                setError(false);
                try {
                    const res = await fetch("/api/genresearch", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ term: term }),
                    });

                    const data = await res.json();
                    setGenres(data);
                } catch (error) {
                    setError(true);
                } finally {
                    setLoading(false);
                }
            }
        }, 500)

        return () => clearTimeout(debounce)

    }, [term])

    return (
        <div className="flex flex-col w-full max-w-md mx-auto">
            <input type="search" className="w-full" placeholder="Gênero musical" value={term} style={{ maxHeight: '200px' }} onChange={(e) => setTerm(e.target.value)}></input>
            <div className="flex-wrap gap-2">
                {isLoading ? (
                    <p className="text-gray-500">Carregando...</p>
                ) : error ? (
                    <p className="text-red-500">Ocorreu um erro no carregamento. Tente novamente</p>
                ) : genres.length > 0 ? (
                    genres.map((genre, index) => (
                        <GenreButton key={index} genre={genre.name} selected={genre.name === selectedGenre} onSelect={setSelectedGenre}/>
                    ))
                ) : <p>Tente pesquisar outro termo...</p>}
            </div>
        </div>
    )
}
"use client";

import { useState, useEffect } from "react";
import GenreButton from "./GenreButton";
import { Genre } from "../api/types/genre";

type GenreSearchProps = {
    selected: string | null;
    onSelectGenre: (genre: string) => void;
};


export default function GenreSearch({selected, onSelectGenre }: GenreSearchProps) {
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

        return () => clearTimeout(debounce);
    }, [term]);

    return (
        <div className="flex flex-col w-full max-w-md mx-auto">
            <input type="search" className="w-full bg-white text-black font-light rounded-sm p-1" placeholder="Pesquisar" value={term} style={{ maxHeight: '200px' }} onChange={(e) => setTerm(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mt-2">
                {isLoading ? (
                    <p className="text-gray-500">Carregando...</p>
                ) : error ? (
                    <p className="text-red-500">Erro ao carregar gêneros. Tente novamente.</p>
                ) : genres.length > 0 ? (
                    genres.map((genre, index) => (
                        <GenreButton
                            key={index}
                            genre={genre.name}
                            selected={genre.name === selected}
                            onSelect={() => onSelectGenre(genre.name)}
                        />
                    ))
                ) : (
                    <p>Nenhum gênero encontrado. Tente outro termo.</p>
                )}
            </div>
        </div>
    );
}
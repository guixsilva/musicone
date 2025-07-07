import { useState, useEffect } from "react";
import GenreButton from "./GenreButton";
import { Genre } from "../api/types/genre";

export default function GenreSearch() {
    const [term, setTerm] = useState('');
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        const debounce = setTimeout(async () => {
            if (term) {
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
                    console.log("API funcionou corretamente: ", data)

                } catch (error) {
                    console.error("Aconteceu um erro:", error);
                }
            }
        }, 500)

        return () => clearTimeout(debounce)

    }, [term])

    return (
        <div className="flex flex-col w-full max-w-md mx-auto">
            <input type="search" className="w-full" placeholder="Gênero musical" value={term} style={{ maxHeight: '200px' }} onChange={(e) => setTerm(e.target.value)}></input>

            <div className="flex-wrap gap-2">
                {genres.map((genre, index) => (
                    <GenreButton key={index} genre={genre.name} />
                ))}
            </div>

        </div>
    )
}
// componente onde o usuário irá escolher o gênero musical.
"use client";

import { useState } from "react";

export default function GenreChoice(){

    const [genre, setGenre] = useState("rock");
    const handleButtonClick = async () =>{
        try{
            const res = await fetch("/api/musicsearch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({genre: genre}),
            });

            const data = await res.json();
            console.log("API funcionou corretamente: ", data)


        }catch(error){
            console.error("Aconteceu um erro:", error);
        }
    }

    return(
        <div>
            <select name="genre" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="reggae">Reggae</option>
                <option value="jazz">Jazz</option>
            </select>

            <button type="button" onClick={handleButtonClick}>
                Buscar Música
            </button>
        </div>
    )
}
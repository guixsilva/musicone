import GenreButton from "./GenreButton"

const types : string[] = ["Álbuns", "Músicas", "Artistas"]

export default function TypeButtons(){
    return(
            <div className="flex-wrap gap-2">
                {types.map((type, index) => (
                    <GenreButton key={index} genre={type} />
                ))}
            </div>
    )
}
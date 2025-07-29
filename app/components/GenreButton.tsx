// botões de gêneros musicais

import * as crypto from 'crypto';
export const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");

export function GradientGenerator(genre: string) {
    const hashGenre = md5(genre);
    const startcolor = `#${hashGenre.slice(0, 6)}`;
    const endcolor = `#${hashGenre.slice(6, 12)}`;
    return [startcolor, endcolor];
}


type GenreButtonProps = {
    genre: string;
    selected: boolean;
    onSelect: (genre: string) => void;
};

export default function GenreButton({ genre, selected, onSelect }: GenreButtonProps) {
    const [startColor, endColor] = GradientGenerator(genre);

    return (
        <button
            type="button"
            onClick={() => onSelect(genre)}
            style={{
                backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
                border: selected ? "1px solid white" : "none",
            }}
            className="flex-auto rounded-full text-white px-4 py-2 shadow-md hover:opacity-90 transition flex-initial"
        >
            {genre}
        </button>
    );
}

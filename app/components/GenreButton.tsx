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
};

export default function GenreButton({ genre }: GenreButtonProps) {
    const [startColor, endColor] = GradientGenerator(genre);

    return (
            <button
                type="button"
                style={{
                    backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
                }}
                className="flex-auto rounded-full text-white px-4 py-2 shadow-md hover:opacity-90 transition flex-initial"
            >
                {genre}
            </button>
    );
}

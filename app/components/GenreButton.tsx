// botões de gêneros musicais

import * as crypto from 'crypto';
export const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest("hex");

export function GradientGenerator(genre: string){
    const hashGenre = md5(genre);
    let startcolor: string[] = [];
    let endcolor: string[] = [];
    const chars = hashGenre.split('');
    
    for(let i = 0; i < 6; i++){
        if(startcolor.length < 6){
            startcolor.join(hashGenre[i]);
        }
    }

    for(let i = 6; i < 12; i++){
        if(endcolor.length < 6){
            endcolor.join(hashGenre[i]);
        }
    }

    return [startcolor, endcolor];
}

export default function GenreButton(genre: string){
    const [StartColor, EndColor] = GradientGenerator(genre = genre);

    return(
        <div>
            <button type="button" style={{ backgroundImage: `linear-gradient(to right, ${StartColor}, ${EndColor})` }} className="rounded-full text-white px-4 py-2">{genre}</button>
        </div>
    )
}
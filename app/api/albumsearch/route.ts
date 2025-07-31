import { NextApiRequest, NextApiResponse } from "next";
import { searchAlbum, randomElement } from "../../lib/lastfm";

export async function POST(req: Request){

    const { genre } = await req.json();

    try{
        const albuns = await searchAlbum(genre);
        const sorted = randomElement(albuns);

        return Response.json({
            nome: sorted.name,
            artista: sorted.artist.name,
            link: sorted.url,
        });

    }catch(erro){
        console.error("Erro", erro);
        return new Response("Erro: ",{status: 500});
    }
}
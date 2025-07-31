import { NextApiRequest, NextApiResponse } from "next";
import { searchArtist, randomElement } from "../../lib/lastfm";

export async function POST(req: Request){

    const { genre } = await req.json();

    try{
        const artists = await searchArtist(genre);
        const sorted = randomElement(artists);

        return Response.json({
            nome: sorted.name,
            artista: sorted.name,
            link: sorted.url,
        });

    }catch(erro){
        console.error("Erro", erro);
        return new Response("Erro: ",{status: 500});
    }
}
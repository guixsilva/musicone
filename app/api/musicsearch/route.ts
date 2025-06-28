import { NextApiRequest, NextApiResponse } from "next";
import { getMusic, randomElement } from "../../lib/lastfm";

export async function POST(req: Request){

    const { genre } = await req.json();

    try{
        const musics = await getMusic(genre, 100);
        const sorted = randomElement(musics);
    
        console.log("Função realizada.")

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
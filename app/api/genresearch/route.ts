import { NextApiRequest, NextApiResponse } from "next";
import { searchGenre } from "../../lib/lastfm";

export async function POST(req: Request) {
    const { term } = await req.json();

    try {
        const data = await searchGenre(term);
        const genres = data.results?.tagmatches?.tag || [];

        console.log("Função realizada.")

        return Response.json(genres);

    } catch (erro) {
        console.error("Erro", erro);
        return new Response("Erro: ", { status: 500 });
    }
}
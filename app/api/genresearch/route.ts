import { NextApiRequest, NextApiResponse } from "next";
import { getTopGenres } from "../../lib/lastfm";

export async function POST(req: Request) {
    const { term } = await req.json();
    try {
        const allGenres = await getTopGenres();
        const filtered = allGenres
            .filter((g: any) =>
                g.name.toLowerCase().includes(term.toLowerCase())
            )
            .slice(0, 20);

        console.log("Função realizada.");
        console.log(filtered);

        return Response.json(filtered);
    } catch (erro) {
        console.error("Erro:", erro);
        return new Response("Erro ao buscar gêneros", { status: 500 });
    }
}

export async function GET() {
    try {
        const topGenres = await getTopGenres();
        const sliced = topGenres.slice(0, 20);

        return Response.json(sliced);
    } catch (error) {
        console.error("Erro ao buscar top tags:", error);
        return new Response("Erro ao buscar gêneros", { status: 500 });
    }
}

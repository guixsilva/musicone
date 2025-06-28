// Paginação - 

export async function getMusic(genero: string, limite: number){
    
    const apikey= process.env.API_KEY;
    const url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genero}&page=${3}&limit=${limite}&api_key=${apikey}&format=json`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.tracks.track;
}

export function randomElement(vector: any[]){
    const i = Math.floor(Math.random() * vector.length);
    console.log(vector[i])
    return vector[i];
}
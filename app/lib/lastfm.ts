// Paginação - 
const apikey= process.env.API_KEY;
import { Genre } from "../api/types/genre";

export async function getMusic(genero: string, limite: number){
    const url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genero}&page=${3}&limit=${limite}&api_key=${apikey}&format=json`
    const response = await fetch(url);
    const data = await response.json();
    return data.tracks.track;
}

export async function searchAlbum(genero: string){
    const url =`https://ws.audioscrobbler.com/2.0/?method=gettopalbums&tag=${genero}&api_key=${apikey}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.albums.album;
}

export async function searchArtist(genero: string){
    const url =`https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${genero}&api_key=${apikey}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.topartists.artist;
}

export function randomElement(vector: any[]){
    const i = Math.floor(Math.random() * vector.length);
    console.log(vector[i])
    return vector[i];
}

export async function searchGenre(genero: string){
    const url =`https://ws.audioscrobbler.com/2.0/?method=tag.search&tag=${genero}&api_key=${apikey}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.tagmatches;
}
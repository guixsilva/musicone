

export default function MusicCard(musicname: string, artist: string, genre: string) {


    return (
        <div className="flex flex-col items-start justify-items-center">
            <img src="" alt={musicname}></img>
            <div>
                <h1>{musicname}</h1>
                <h1>{artist}</h1>
                <h1>{genre}</h1>
            </div>
        </div>
    )
}
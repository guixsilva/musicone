type MusicCardProps = {
    musicname: string;
    artist: string;
    genre: string;
};

export default function MusicCard({ musicname, artist, genre }: MusicCardProps) {
    return (
        <div className="w-full max-w-80 bg-black text-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src=""
                alt={musicname}
            />
            <div className="text-center">
                <h1 className="text-lg font-bold">{musicname}</h1>
                <h2 className="text-md">{artist}</h2>
                <p className="text-sm text-gray-300">{genre}</p>
            </div>
        </div>
    );
}

export default function Header() {
    return (
        <div className="w-full inline-flex flex-row items-center bg-white px-4 py-2">
            <img
                src="logo.svg"
                height="30"
                width="30"
                className="mr-2"
            />
            <h1 className="text-3xl font-sans font-black text-black">music</h1>
            <h1 className="text-3xl font-sans font-light text-black ml-1">one</h1>
        </div>
    );
}

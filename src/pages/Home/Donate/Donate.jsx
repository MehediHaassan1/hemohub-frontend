const Donate = () => {
    return (
        <div
            className="min-h-64 py-2 my-10"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1681911046064-e663d5192921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D)",
            }}
        >
            <div className="max-w-screen-xl min-h-60 mx-auto flex items-center justify-center bg-primary/80 rounded-md h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
                <div className="text-center space-y-5">
                    <h1 className="text-4xl">Become a part of our community</h1>
                    <button className="bg-accent py-2 px-4 rounded ">
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Donate;

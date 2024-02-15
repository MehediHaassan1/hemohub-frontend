import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">
                        Give the Gift of Life
                    </h1>
                    <p className="mb-5">
                        Donate Blood Today. Every drop counts in saving lives.
                        Your generosity can make a world of difference.
                        Together, let's ensure a brighter tomorrow for those in
                        need.
                    </p>
                    <Link to="/register">
                        <button className="bg-primary/80 hover:bg-primary duration-300 text-lg font-semibold py-2 px-4 my-3 md:my-0 mx-2 rounded ">
                            Join as a donor
                        </button>
                    </Link>
                    <Link to="/search-donors">
                        <button className="bg-accent/80 hover:bg-accent duration-300 text-lg font-semibold py-2 px-4 my-3 md:my-0 mx-2 rounded">
                            Search donors
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

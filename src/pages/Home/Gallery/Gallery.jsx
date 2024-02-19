import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const Gallery = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionTitle
                title={"Capturing Moments"}
                subtitle={"Explore Our Campaigns Gallery"}
            ></SectionTitle>
            <div className="container mx-auto px-4">
                <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="hidden md:block md:w-1/2 px-4">
                            <div
                                className="h-full w-full bg-cover rounded shadow-md"
                                style={{
                                    backgroundImage:
                                        "url(https://images.unsplash.com/photo-1606206522398-de3bd05b1615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymxvb2QlMjBkb25hdGlvbiUyMG1hZGljYWwlMjB2b2x1bnRlZXJ8ZW58MHwwfDB8fHww)",
                                }}
                            ></div>
                        </div>
                        <div className="md:w-1/2 h-auto px-4">
                            <div className="mb-8">
                                <img
                                    className="rounded shadow-md w-full h-full"
                                    src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymxvb2QlMjBkb25hdGlvbiUyMG1hZGljYWwlMjB2b2x1bnRlZXJ8ZW58MHwwfDB8fHww"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="rounded shadow-md w-full h-full"
                                    src="https://images.unsplash.com/photo-1584452964155-ef139340f0db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ymxvb2QlMjBkb25hdGlvbiUyMG1hZGljYWwlMjB2b2x1bnRlZXJ8ZW58MHwwfDB8fHww"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                            <img
                                className="rounded shadow-md w-full h-full"
                                src="https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb29kJTIwZG9uYXRpb24lMjBtYWRpY2FsJTIwdm9sdW50ZWVyfGVufDB8MHwwfHx8MA%3D%3D"
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                            <img
                                className="rounded shadow-md w-full h-full"
                                src="https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ymxvb2QlMjBkb25hdGlvbiUyMG1hZGljYWwlMjB2b2x1bnRlZXJ8ZW58MHwwfDB8fHww"
                                alt=""
                            />
                        </div>
                    </div>
                </section>

                <section className="md:pt-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="md:w-1/3 px-4 mb-8">
                            <img
                                className="rounded shadow-md w-full h-full"
                                src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJsb29kJTIwZG9uYXRpb24lMjBtYWRpY2FsJTIwdm9sdW50ZWVyfGVufDB8MHwwfHx8MA%3D%3D"
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/3 px-4 mb-8">
                            <img
                                className="rounded shadow-md w-full h-full"
                                src="https://images.unsplash.com/photo-1631815589600-85ee48945ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJsb29kJTIwZG9uYXRpb24lMjBtYWRpY2FsJTIwdm9sdW50ZWVyfGVufDB8MHwwfHx8MA%3D%3D"
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/3 px-4 mb-8">
                            <img
                                className="rounded shadow-md w-full h-full"
                                src="https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJsb29kJTIwZG9uYXRpb24lMjBtYWRpY2FsJTIwdm9sdW50ZWVyfGVufDB8MHwwfHx8MA%3D%3D"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;

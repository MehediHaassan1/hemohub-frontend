import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <ScaleLoader color="#095a4a" margin={5} radius={50} />
        </div>
    );
};

export default Loading;

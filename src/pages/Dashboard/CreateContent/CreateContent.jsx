import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import usePrivetApi from "../../../hooks/usePrivetApi";
import usePublicApi from "../../../hooks/usePublicApi";
import moment from "moment";
import { Helmet } from "react-helmet-async";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const CreateContent = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [postingDate, setPostingDate] = useState("");
    const [postingTime, setPostingTime] = useState("");
    const privetApi = usePrivetApi();
    const publicApi = usePublicApi();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const date = moment().format("DD-MM-YYYY");
        const time = moment().format("hh:mm A");
        setPostingDate(date);
        setPostingTime(time);
    }, []);

    const onSubmit = async (data) => {
        if (content === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Content can't be empty",
            });
            return;
        }
        let contentThumbnailImage;
        if (data.contentThumbnail) {
            const imageData = { image: data.contentThumbnail[0] };
            const imageHostingRes = await publicApi.post(
                imageHostingURL,
                imageData,
                {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                }
            );
            contentThumbnailImage = imageHostingRes.data.data.display_url;
        }

        const blogData = {
            contentTitle: data?.contentTitle,
            contentThumbnailImage,
            content,
            postingDate,
            postingTime,
            status: "draft",
        };
        const blogRes = await privetApi.post("/api/v1/blogs", blogData);
        if (blogRes.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Post has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate(-1);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Create Content | HemoHub</title>
            </Helmet>
            <div className="pb-5 mb-5 border-b border-dashed flex items-center justify-between">
                <h1 className="md:text-3xl">Create Content</h1>
                <button
                    className="text-lg tracking-widest text-accent bg-slate-800 py-1 px-3 rounded"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-xl text-white">
                            Content Title
                        </span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input border border-primary bg-transparent w-full focus:outline-none focus:border-primary"
                        {...register("contentTitle", {
                            required: {
                                value: true,
                                message: "Content title is required",
                            },
                        })}
                    />
                    <div className="label">
                        <p className="text-red-400">
                            {errors.contentTitle?.message}
                        </p>
                    </div>
                </label>
                <label className="form-control w-full cursor-pointer">
                    <div className="label">
                        <span className="label-text text-white text-xl">
                            Pick a file
                        </span>
                    </div>
                    <input
                        type="file"
                        className="file-input file-input-bordered border-primary focus:outline-none w-full bg-transparent cursor-pointer"
                        {...register("contentThumbnail", {
                            required: {
                                value: true,
                                message: "Content Thumbnail is required",
                            },
                        })}
                    />
                    <div className="label">
                        <p className="text-red-400">
                            {errors.contentThumbnail?.message}
                        </p>
                    </div>
                </label>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1}
                    onChange={(newContent) => setContent(newContent)}
                    className="text-black my-3"
                />
                <div className="">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg font-semibold text-txt"></span>
                        </div>
                        <input
                            type="submit"
                            value="Post"
                            className={`file-input file-input-bordered w-full text-txt font-bold cursor-pointer bg-primary outline-none tracking-widest`}
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default CreateContent;

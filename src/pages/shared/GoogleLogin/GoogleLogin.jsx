import { useContext } from "react";
import { USER_CONTEXT } from "../../../context/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { loginWithGoogle } = useContext(USER_CONTEXT);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login successful",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    navigate("/");
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            });
    };
    return (
        <div className="text-center" onClick={handleGoogleLogin}>
            <img
                src="https://i.ibb.co/hfmNBrG/google-logo.png"
                alt="google-logo"
                className="h-10 mx-auto"
            />
        </div>
    );
};

export default GoogleLogin;

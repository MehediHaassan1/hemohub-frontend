import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 mt-10 rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaLinkedin className="h-6 w-6 hover:text-secondary cursor-pointer duration-300"></FaLinkedin>
                        </a>
                        <a>
                            <FaTwitter className="h-6 w-6 hover:text-secondary cursor-pointer duration-300"></FaTwitter>
                        </a>
                        <a>
                            <FaInstagram className="h-6 w-6 hover:text-secondary cursor-pointer duration-300"></FaInstagram>
                        </a>
                        <a>
                            <FaFacebook className="h-6 w-6 hover:text-secondary cursor-pointer duration-300"></FaFacebook>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved by HemoHub
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;

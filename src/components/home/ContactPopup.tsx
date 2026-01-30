import React, { useEffect, useRef } from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import resume from "../../assets/Jeffrey_Li_Resume.docx.pdf";

interface ContactPopupProps {
    onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleScroll = () => {
            onClose();
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
            <div ref={popupRef} className="relative bg-white p-3 rounded-lg shadow-lg w-100">

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-lg"
                >
                    &#x2715;
                </button>
                <div className="flex flex-col gap-4 mt-10">
                    <a
                        href="https://github.com/jeffcli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                        <RiGithubFill size={24} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jeffcli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                        <RiLinkedinBoxFill size={24} />
                        LinkedIn
                    </a>
                    <a
                        href="mailto:jcli@wpi.edu"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                        <FiMail size={24} />
                        Email
                    </a>
                    <a
                        href={resume}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                    >
                        <FaRegFileAlt size={24} />
                        Resume
                    </a>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ContactPopup;
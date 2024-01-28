import Section from "../Section/Section";
import emailjs from "emailjs-com";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Contact = ({ id }) => {
    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        html_message: "",
    });
    const [errors, setErrors] = useState({
        from_name: "",
        from_email: "",
        html_message: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Validate Name
        if (formData.from_name.trim() === "") {
            newErrors.from_name = "Name is required";
            isValid = false;
        } else {
            newErrors.from_name = "";
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.from_email.trim() === "") {
            newErrors.from_email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.from_email.trim())) {
            newErrors.from_email = "Invalid email format";
            isValid = false;
        } else {
            newErrors.from_email = "";
        }

        // Validate Message
        if (formData.html_message.trim() === "") {
            newErrors.html_message = "Message is required";
            isValid = false;
        } else {
            newErrors.html_message = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const closeModal = () => {
        setStatus(null);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("overlay")) {
            closeModal();
        }
    };

    return (
        <Section id={id}>
            <div className="md:mb-0 mb-28 flex flex-col items-center justify-center gap-6">
                <h2 className="text-3xl font-bold mt-6 text-center text-white">
                    Contact me
                </h2>

                <div className="w-2/3 backdrop-blur-sm bg-amber-50/50 rounded-xl p-8">
                    <form className="flex flex-col gap-4">
                        <div className="flex items-center gap-1">
                            <label className="text-lg text-gray-800 font-semibold">
                                Name
                            </label>
                            {errors.from_name && (
                                <span className="text-red-500 font-bold">(*{errors.from_name})</span>
                            )}
                        </div>

                        <input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={(e) =>
                                setFormData({ ...formData, from_name: e.target.value })
                            }
                            className="text-black p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                        />

                        <div className="flex items-center gap-1">
                            <label className="text-lg text-gray-800 font-semibold">Email</label>
                            {errors.from_email && (
                                <span className="text-red-500 font-bold">(*{errors.from_email})</span>
                            )}
                        </div>


                        <input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={(e) =>
                                setFormData({ ...formData, from_email: e.target.value })
                            }
                            className="text-black p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                        />


                        <div className="flex items-center gap-1">
                            <label className="text-lg text-gray-800 font-semibold">
                                Message
                            </label>
                            {errors.html_message && (
                                <p className="text-red-500 font-bold">(*{errors.html_message})</p>
                            )}
                        </div>

                        <textarea
                            name="html_message"
                            value={formData.html_message}
                            onChange={(e) =>
                                setFormData({ ...formData, html_message: e.target.value })
                            }
                            className="text-black p-2 border border-gray-400 rounded-md h-32 focus:outline-none focus:border-blue-500"
                        />

                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

            <AnimatePresence>
                {status && (
                    <motion.div
                        className={`${
                            status === "success" ? "bg-green-500" : "bg-red-500"
                        } overlay fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-30`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleOverlayClick}
                    >
                        <div className="bg-white p-4 rounded-md">
                            <p className="text-lg font-semibold text-black">
                                {status === "success"
                                    ? "Message was sent successfully"
                                    : "Error sending the message. Please try again."}
                            </p>
                            <button
                                onClick={closeModal}
                                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Contact;

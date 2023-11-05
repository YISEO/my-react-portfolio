import { useState } from "react";
import { validEmail } from "../utils/helpers";

function Contact() {
    const [formData, setFormData] = useState({ username: "", email: "", message: ""});
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === "email") {
            const isValid = validEmail(value);
            if (!isValid) {
                setErrorMessage("Invalid email address");
            } else {
                setErrorMessage("");
            }
        } else if (name === "username" && !value) {
            setErrorMessage("Username is required");
        } else if (name === "message" && !value) {
            setErrorMessage("Message is required");
        } else {
            setErrorMessage("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.message) {
            setErrorMessage("Please fill in all required fields");
            return;
        }

        if (!validEmail(formData.email)) {
            setErrorMessage("Invalid email address");
            return;
        }

        alert("Thank you for submitting the form. I will contact you soon!");
    };

    return (
        <section className="w-full max-w-lg flex flex-col justify-center">
            <h2 className="lg:text-3xl sm:text-2xl text-xl mt-10 mb-7">Contact Me</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Name" onBlur={handleFormChange} className="block bg-gray px-5 py-3 rounded-md" />
                <input type="text" name="email" placeholder="Email" onBlur={handleFormChange} className="block bg-gray px-5 py-3 rounded-md mt-2" />
                <textarea name="message" placeholder="Please leave a message" onBlur={handleFormChange} className="block bg-gray px-5 py-3 rounded-md mt-2 h-40"></textarea>
                {errorMessage && (
                    <p className="mt-2">{errorMessage}</p>
                )}
                <input type="submit" value="Submit" className="block border border-gold rounded-md text-gold hover:bg-gold hover:text-dark duration-500 mt-5 w-32 h-12 cursor-pointer"/>
            </form>
        </section>
    );
}

export default Contact;

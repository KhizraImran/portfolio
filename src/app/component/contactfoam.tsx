"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    to_name: "Khizra Imran",  // Static recipient name
    from_name: "",            // User's name input
    reply_to: "",             // User's email input
    message: ""               // User's message input
  });

  const [status, setStatus] = useState("");

  // Initialize EmailJS with Public Key
  useEffect(() => {
    emailjs.init("0R-pW0evBn6xNkd3D");  // Your Public API Key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_v9gkxgk",      // Your Service ID
      "template_n4vqmpl",     // Your Template ID (updated)
      formData
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
      },
      (error) => {
        console.error("EmailJS Error:", error);  // This will give detailed error info
        setStatus("Failed to send message. Please try again.");
      }
    );

    setFormData({ to_name: "Khizra Imran", from_name: "", reply_to: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>

      <label className="block text-left mb-4">
        Name:
        <input
          type="text"
          name="from_name"  // Matches {{from_name}} in the template
          placeholder="Enter your name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full mt-2"
        />
      </label>

      <label className="block text-left mb-4">
        Email:
        <input
          type="email"
          name="reply_to"  // Matches {{reply_to}} in the template
          placeholder="Enter your email"
          value={formData.reply_to}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full mt-2"
        />
      </label>

      <label className="block text-left mb-4">
        Message:
        <textarea
          name="message"  // Matches {{message}} in the template
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full mt-2"
          rows={5}
        ></textarea>
      </label>

      <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300 w-full">
        Submit
      </button>

      {status && <p className={`mt-4 ${status.includes("successfully") ? 'text-green-600' : 'text-red-600'} font-semibold`}>{status}</p>}
    </form>
  );
}

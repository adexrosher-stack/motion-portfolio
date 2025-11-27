"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mwpwpgow", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-clash text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have a question, project idea, or collaboration in mind? Send me a message below!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-left">
              <label htmlFor="name" className="block font-semibold mb-2 text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="text-left">
              <label htmlFor="email" className="block font-semibold mb-2 text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="text-left">
            <label htmlFor="message" className="block font-semibold mb-2 text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "✅ Message Sent!"
              : status === "error"
              ? "❌ Error — Try Again"
              : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center flex-wrap gap-6 mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-gray-600 hover:text-blue-700">
            <FaLinkedin size={30} />
          </a>
          <a href="https://t.me/adexrosher" target="_blank" className="text-gray-600 hover:text-sky-500">
            <FaTelegram size={30} />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" className="text-gray-600 hover:text-pink-500">
            <FaInstagram size={30} />
          </a>
          <a href="https://youtube.com/@yourchannel" target="_blank" className="text-gray-600 hover:text-red-500">
            <FaYoutube size={30} />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" className="text-gray-600 hover:text-sky-400">
            <FaTwitter size={30} />
          </a>
          <a href="https://tiktok.com/@yourhandle" target="_blank" className="text-gray-600 hover:text-black">
            <FaTiktok size={30} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

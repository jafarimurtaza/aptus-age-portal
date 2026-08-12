"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setSuccess("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white p-6 shadow-2xl sm:p-8">
      {/* Blue top decoration */}

      <div className="absolute inset-x-0 top-0 h-2 bg-[#C8955A]" />

      <form onSubmit={handleSubmit} className="space-y-5 pt-2">
        {/* Name + Email */}

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-semibold text-[#17396C]"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="
                w-full
                rounded-lg
                border
                border-[#E3E7ED]
                bg-white
                px-3
                py-3
                text-xs
                text-[#17396C]
                outline-none
                transition
                placeholder:text-[#9CA3AF]
                focus:border-[#C8955A]
                focus:ring-2
                focus:ring-[#C8955A]/15
              "
            />
          </div>

          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold text-[#17396C]"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="
                w-full
                rounded-lg
                border
                border-[#E3E7ED]
                bg-white
                px-3
                py-3
                text-xs
                text-[#17396C]
                outline-none
                transition
                placeholder:text-[#9CA3AF]
                focus:border-[#C8955A]
                focus:ring-2
                focus:ring-[#C8955A]/15
              "
            />
          </div>
        </div>

        {/* Phone + Subject */}

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Phone */}

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-semibold text-[#17396C]"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="
                w-full
                rounded-lg
                border
                border-[#E3E7ED]
                bg-white
                px-3
                py-3
                text-xs
                text-[#17396C]
                outline-none
                transition
                placeholder:text-[#9CA3AF]
                focus:border-[#C8955A]
                focus:ring-2
                focus:ring-[#C8955A]/15
              "
            />
          </div>

          {/* Subject */}

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-xs font-semibold text-[#17396C]"
            >
              Subject
            </label>

            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
              className="
                w-full
                rounded-lg
                border
                border-[#E3E7ED]
                bg-white
                px-3
                py-3
                text-xs
                text-[#17396C]
                outline-none
                transition
                placeholder:text-[#9CA3AF]
                focus:border-[#C8955A]
                focus:ring-2
                focus:ring-[#C8955A]/15
              "
            />
          </div>
        </div>

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold text-[#17396C]"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={5}
            required
            className="
              w-full
              resize-none
              rounded-lg
              border
              border-[#E3E7ED]
              bg-white
              px-3
              py-3
              text-xs
              leading-6
              text-[#17396C]
              outline-none
              transition
              placeholder:text-[#9CA3AF]
              focus:border-[#C8955A]
              focus:ring-2
              focus:ring-[#C8955A]/15
            "
          />
        </div>

        {/* Success */}

        {success && (
          <div className="rounded-lg bg-green-50 p-3 text-xs font-medium text-green-700">
            {success}
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-xs font-medium text-red-700">
            {error}
          </div>
        )}

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-[#C8955A]
            px-6
            py-3.5
            text-xs
            font-semibold
            text-white
            shadow-lg
            shadow-[#C8955A]/20
            transition-all
            duration-300
            hover:bg-[#17396C]
            hover:shadow-xl
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

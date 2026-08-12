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
    <div className="relative overflow-hidden rounded-2xl border border-base-300/20 bg-white p-6 shadow-2xl sm:p-8">
      {/* Gold Top Decoration */}

      <div className="absolute inset-x-0 top-0 h-2 bg-primary" />

      <form onSubmit={handleSubmit} className="space-y-5 pt-2">
        {/* Name + Email */}

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-semibold text-base-300"
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
              className="w-full rounded-lg border border-base-300/15 bg-white px-3 py-3 text-xs text-base-content outline-none transition placeholder:text-base-content/40 focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </div>

          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold text-base-300"
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
              className="w-full rounded-lg border border-base-300/15 bg-white px-3 py-3 text-xs text-base-content outline-none transition placeholder:text-base-content/40 focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </div>
        </div>

        {/* Phone + Subject */}

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Phone */}

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-semibold text-base-300"
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
              className="w-full rounded-lg border border-base-300/15 bg-white px-3 py-3 text-xs text-base-content outline-none transition placeholder:text-base-content/40 focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </div>

          {/* Subject */}

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-xs font-semibold text-base-300"
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
              className="w-full rounded-lg border border-base-300/15 bg-white px-3 py-3 text-xs text-base-content outline-none transition placeholder:text-base-content/40 focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </div>
        </div>

        {/* Message */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold text-base-300"
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
            className="w-full resize-none rounded-lg border border-base-300/15 bg-white px-3 py-3 text-xs leading-6 text-base-content outline-none transition placeholder:text-base-content/40 focus:border-primary focus:ring-2 focus:ring-primary/15"
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
          className="w-full rounded-xl bg-primary px-6 py-3.5 text-xs font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-base-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

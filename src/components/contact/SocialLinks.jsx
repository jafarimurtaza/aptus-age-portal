"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    title: "Build with us",
    description: "Explore our community, updates, and stories.",
    button: "Visit Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    title: "See the journey",
    description: "Behind the scenes of our work and activities.",
    button: "Follow on Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    title: "Grow with us",
    description: "Connect with us for updates, opportunities, and stories.",
    button: "Connect on LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    title: "Watch our stories",
    description: "Discover videos, projects, and inspiring stories.",
    button: "Visit YouTube",
    href: "#",
    icon: FaYoutube,
  },
];

export default function SocialLinks() {
  return (
    <section className="w-full border-y border-[#E7E3DD] bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <div
                key={social.name}
                className={`
                  flex
                  min-h-[270px]
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-12
                  text-center
                  transition-all
                  duration-300
                  hover:bg-white
                  ${index !== 0 ? "border-t md:border-t-0 md:border-l" : ""}
                  border-[#E7E3DD]
                `}
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    text-[#17396C]
                    transition-all
                    duration-300
                    group-hover:bg-[#C8955A]
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-5
                    text-lg
                    font-bold
                    text-[#0B0F19]
                  "
                >
                  {social.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    max-w-[220px]
                    text-sm
                    leading-6
                    text-[#6C7280]
                  "
                >
                  {social.description}
                </p>

                {/* Button */}
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    min-w-[150px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E1DDD6]
                    bg-white
                    px-5
                    py-2.5
                    text-xs
                    font-semibold
                    text-[#17396C]
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-[#C8955A]
                    hover:bg-[#C8955A]
                    hover:text-white
                    hover:shadow-md
                  "
                >
                  {social.button}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

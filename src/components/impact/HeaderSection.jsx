'use client'
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { name: "Graduates", path: "/graduates" },
    { name: "Projects", path: "/projects" },
    { name: "Aptus", path: "/aptus" },
    { name: "Impact", path: "/impact" },
    { name: "Cohorts", path: "/cohorts" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
  ];


  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) 
        {setIsOpen(false);}}
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
          document.removeEventListener("mousedown", handleClickOutside);}, [isOpen]);

  // Prevent scrolling when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
    }, [isOpen]);

    const closeMenu = () => {
    setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-[998] bg-cream/100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white">
          <GraduationCap size={25}/>
        </div>
        <span className="text-xl font-bold text-dark">
              Afghan Geeks
        </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link)=>(
          <Link key={link.path} href={link.path}
            className={`text-sm font-medium transition-all duration-300
              ${ pathname === link.path? 
                "text-navy border-b-2 border-gold pb-1":
                "text-dark hover:text-gold"}
                `}>
                {link.name}
                </Link>
                ))}
                </nav>
             {/* Button */}
            <Link href="/contact" className="hidden lg:block bg-navy hover:bg-gold text-cream px-6 py-3 rounded-2xl font-medium transition">
            Get Started
          </Link>
         {/* Mobile Hamburger */}
          <button onClick={()=>setIsOpen(!isOpen)}
            className="lg:hidden relative z-[1000] w-10 h-10 cursor-pointe" aria-label="Toggle menu">

        <span className={`absolute left-2 top-3 w-6 h-[2px] bg-gray-800 transition-all duration-300 ${isOpen?"rotate-45 translate-y-[9px]":""}`}/>
        <span className={`absolute left-2 top-5 w-6 h-[2px] bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0":""}`}/>
        <span className={`absolute left-2 top-7 w-6 h-[2px] bg-gray-800 transition-all duration-300 ${isOpen?"-rotate-45 -translate-y-[3px]":""}`}/>
          </button>
        </div>
      </div>

    {/* Mobile Menu */}
    <div ref={menuRef}
      className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-navy lg:hidden transition-all duration-500 ease-in-out ${ 
        isOpen
        ?"translate-y-0 opacity-100 visible": "-translate-y-5 opacity-0 invisible"}
        `}>
      <nav className="flex flex-col items-center justify-center gap-7 h-full">
      {links.map((link)=>(
        <Link
          key={link.path}
          href={link.path}
          onClick={closeMenu}
          className={`text-xl font-medium transition ${
            pathname === link.path ? "text-gold" : "text-cream hover:text-gold"
            }`}>
            {link.name}
            </Link>
            ))}
          </nav>
        </div>
      </header>
      );
    }
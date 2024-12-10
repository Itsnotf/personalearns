'use client'
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the link is active
  const isActive = (path : any) => {
    if (path === "/pembelajaran") {
      return pathname.startsWith("/pembelajaran");
    }
    return pathname === path;
  };

  // Update navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full z-50 transition-all  duration-300 ${isScrolled ? "bg-white shadow-md" : ""}`}>
      <div className="mx-[20px] md:mx-[80px] lg:mx-[100px] h-16 flex justify-between items-center">
        <h1 className="text-xl text-primary font-bold">Personalearns</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          <a href="/" className={isActive("/") ? "text-primary font-semibold" : "text-abu"}>Beranda</a>
          <a href="/rekomendasi" className={isActive("/rekomendasi") ? "text-primary font-semibold" : "text-abu"}>Rekomendasi</a>
          <a href="/tentangKami" className={isActive("/tentangKami") ? "text-primary font-semibold" : "text-abu"}>Tentang Kami</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-primary">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-md z-50 flex flex-col p-5">
            <h1 className="text-xl text-primary font-bold mb-6">Personalearns</h1>
            <a href="/" onClick={toggleMenu} className={isActive("/") ? "text-primary font-semibold mb-4" : "text-abu mb-4"}>Beranda</a>
            <a href="/rekomendasi" onClick={toggleMenu} className={isActive("/rekomendasi") ? "text-primary font-semibold mb-4" : "text-abu mb-4"}>Rekomendasi</a>
            <a href="/tentangKami" onClick={toggleMenu} className={isActive("/tentangKami") ? "text-primary font-semibold mt-4" : "text-abu mt-4"}>Tentang Kami</a>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the link is active
  const isActive = (path: string) => {
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
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="mx-[20px] md:mx-[80px] lg:mx-[100px] h-16 flex justify-between items-center">
        <h1 className="text-xl text-primary font-bold">Personalearns</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/" className={isActive("/") ? "text-primary font-semibold" : "text-abu"}>
            Beranda
          </Link>
          <Link
            href="/rekomendasi"
            className={isActive("/rekomendasi") ? "text-primary font-semibold" : "text-abu"}
          >
            Rekomendasi
          </Link>
          <Link
            href="/tentangKami"
            className={isActive("/tentangKami") ? "text-primary font-semibold" : "text-abu"}
          >
            Tentang Kami
          </Link>
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
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={isActive("/") ? "text-primary font-semibold mb-4" : "text-abu mb-4"}
            >
              Beranda
            </Link>
            <Link
              href="/rekomendasi"
              onClick={() => setMenuOpen(false)}
              className={isActive("/rekomendasi") ? "text-primary font-semibold mb-4" : "text-abu mb-4"}
            >
              Rekomendasi
            </Link>
            <Link
              href="/tentangKami"
              onClick={() => setMenuOpen(false)}
              className={isActive("/tentangKami") ? "text-primary font-semibold mt-4" : "text-abu mt-4"}
            >
              Tentang Kami
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

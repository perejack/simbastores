import { useState } from "react";
import simbaLogo from "@/assets/simba-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#products", text: "Products" },
    { href: "#about", text: "About Us" },
    { href: "#news", text: "News Room" },
    { href: "#contact", text: "Contact Us" },
    { href: "#nccl", text: "NCCL Uganda" },
  ];

  return (
    <nav className="bg-primary text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <img src={simbaLogo} alt="Simba Cement" className="h-12" />
          </div>
          <div className="mt-1">
            <a href="tel:+254783627395" className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">+254783627395</span>
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-white hover:text-gray-200 transition-colors font-medium">
              {link.text}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="block text-white hover:text-gray-200 transition-colors font-medium py-2">
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
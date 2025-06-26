"use client";

import Link from "next/link";

const Header = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6 backdrop-blur-sm rounded-b-lg border-b border-white/10 bg-black/10">
        <Link href="/" className="text-2xl font-bold text-white font-headline">
          Raj Dange
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollTo('skills')} className="text-white hover:text-accent transition-colors font-medium">
            Skills
          </button>
          <button onClick={() => scrollTo('projects')} className="text-white hover:text-accent transition-colors font-medium">
            Projects
          </button>
          <button onClick={() => scrollTo('contact')} className="text-white hover:text-accent transition-colors font-medium">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

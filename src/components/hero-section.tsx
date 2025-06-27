import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="relative w-full aspect-[30/22] flex items-start justify-start text-white overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/Images/hero1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/0 z-10" />
      <div className="relative z-20 container mx-auto px-4 md:px-1 flex">
        <div className="max-w-3xl pt-8 md:pt-16 lg:pt-40">
          <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold font-headline leading-tight">
            Data Professional
          </h1>
          <p className="mt-4 text-lg md:text-l text-gray-200 font-body max-w-xl">
          I’m a Data Professional with practical experience in building robust, scalable data solutions using both cloud-native and enterprise-grade tools.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/RajDange" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <Github className="h-8 w-8 text-white hover:text-accent transition-colors" />
              </a>
              <a href="https://linkedin.com/in/raj-dange" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-8 w-8 text-white hover:text-accent transition-colors" />
              </a>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default HeroSection;
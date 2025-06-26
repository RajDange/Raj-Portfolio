
"use client";

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/lib/portfolio-data';

const ProjectsSection = () => {
    return (
        <section id="projects" className="bg-black text-white py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-center mb-4">Projects</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-16">A selection of my work. Click to see the repository.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[22rem]">
                    {projectsData.map((project, index) => (
                        <a href={project.Gitlink} target="_blank" rel="noopener noreferrer" key={index}
                           className={`group relative overflow-hidden rounded-xl block transition-all duration-300 ease-in-out hover:scale-[1.03] border-2 border-white ring-2 shadow-[0_4px_24px_0_rgba(255,255,255,0.2)] hover:border-[#7395d3d0] hover:shadow-[0_0_30px_5px_#7395d3d0,0_4px_24px_0_rgba(255,255,255,0.2)] ${project.className}`}
                           style={{ transform: 'translateZ(0)' }}
                        >
                            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-110" data-ai-hint={project.aiHint} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold font-headline text-white">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">{tag}</Badge>)}
                                </div>
                                <div className="absolute top-4 right-4 p-3 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu group-hover:scale-110">
                                    <ArrowUpRight className="h-5 w-5 text-white" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;

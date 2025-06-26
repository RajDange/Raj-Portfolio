import Image from 'next/image';

const GithubShowcase = () => (
    <section id="github-showcase" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-center mb-4 text-white">My GitHub</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-16">
                A glimpse into my coding activity and open-source contributions.
            </p>
            <div className="group w-full max-w-5xl" style={{ perspective: '1500px' }}>
                <a href="https://github.com/RajDange" target="_blank" rel="noopener noreferrer"
                   className="block rounded-xl bg-black transition-all duration-500 ease-out shadow-[-1px_1px_2px_#00aaff,-2px_2px_4px_rgba(0,170,255,0.5),1px_-1px_2px_#ff0000,2px_-2px_25px_rgba(255,0,0,34)] group-hover:shadow-[-1px_1px_2px_#00aaff,-5px_5px_40px_rgba(0,170,255,34),2px_-2px_5px_#ff0000,5px_-5px_80px_rgba(255,0,0,67)]"
                   style={{ transform: 'rotateX(5deg) rotateY(-5deg) rotateZ(2deg)', transformStyle: 'preserve-3d' }}>
                    <div className="rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                        <Image
                            src="/Images/Img1.png"
                            alt="GitHub Profile Screenshot"
                            width={1200}
                            height={630}
                            className="w-full"
                            data-ai-hint="github profile"
                        />
                    </div>
                </a>
            </div>
        </div>
    </section>
);

export default GithubShowcase;

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => (
    <footer id="contact" className="bg-black py-8">
        <div className="container mx-auto px-4 md:px-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">
                <p className="text-sm text-gray-400 order-3 md:order-1">&copy; 2025 Raj Dange. All rights reserved.</p>
                <div className="flex items-center gap-6 order-2">
                    <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
                    <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="/admin" className="text-sm text-gray-400 hover:text-primary transition-colors">Admin</Link>
                </div>
                <div className="flex items-center gap-4 order-1 md:order-3">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <Github className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
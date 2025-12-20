import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import NavigationBar from '@/components/navbar/NavigationBar';
import Footer from './components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Andreas Giersch | Full Stack Developer',
    description:
        'Portfolio of Andreas Giersch, a Full Stack Developer specializing in React, Next.js, TS and Python. Explore my projects, technical skills, and software engineering experience.',
    authors: [{ name: 'Andreas Giersch' }],
    creator: 'Andreas Giersch',
    keywords: [
        'Frontend Developer',
        'Full Stack Developer',
        'Next.js',
        'React',
        'Typescript',
        'Python',
        'Portfolio',
        'Web Development',
        'JavaScript',
        'Bornheim',
        'Bonn',
        'Köln',
        'Cologne',
        'Fullstack Entiwckler',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <Providers>
                    <NavigationBar />
                    <div className="flex h-[calc(100vh-64px-40px)] flex-col items-center">{children}</div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}

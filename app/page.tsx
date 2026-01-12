import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

function Home() {
    return (
        <div className="flex size-full flex-col items-center justify-center px-6 hero-gradient">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
            </div>

            <main className="relative z-10 flex max-w-2xl flex-col items-center text-center">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Available for new opportunities
                </div>

                <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                    Hi, I am <span className="text-gradient">Andreas Giersch</span>
                </h1>

                <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
                    Fullstack Engineer & Data Scientist
                </p>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground/90">
                    I build elegant web experiences and turn complex data into actionable insights. Passionate about
                    clean code, scalable systems, and meaningful user interfaces.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {['TypeScript', 'Next.js', 'React', 'Python', 'FastAPI', 'Kubernetes'].map((tech) => (
                        <span
                            key={tech}
                            className="rounded-xl border-1 border-white bg-muted/50 px-3 py-1 text-sm font-medium  transition-colors hover:bg-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-10 flex items-center gap-4">
                    <a
                        href="https://github.com/AndreasGiersch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:glow"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/andreas-giersch-22a570233/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:glow"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </a>
                    <a
                        href="mailto:andreasgiersch@web.de"
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:glow"
                        aria-label="Email"
                    >
                        <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </a>
                </div>

                <Link
                    href="/projects"
                    className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary link-underline"
                >
                    View my work
                </Link>
            </main>
        </div>
    );
}

export default Home;

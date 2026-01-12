import Link from 'next/link';

export default function Footer() {
    return (
        <div className="bg-transparent h-10 flex w-full items-center border-b border-divider backdrop-blur-lg backdrop-saturate-150 justify-start">
            <div className="container mx-auto my-auto px-6 text-background">
                <span>© Andreas Giersch. All rights reserved. </span>
                <span>
                    Created with{' '}
                    <Link className="underline" href={'https://nextjs.org/'}>
                        Next.js
                    </Link>
                    ,{' '}
                    <Link className="underline" href={'https://tailwindcss.com/'}>
                        Tailwind CSS
                    </Link>{' '}
                    and{' '}
                    <Link className="underline" href={'https://www.heroui.com/'}>
                        HeroUI
                    </Link>
                    .{' '}
                </span>
            </div>
        </div>
    );
}

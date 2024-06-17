import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-neutral-100 h-10 flex w-full items-center border-b border-divider backdrop-blur-lg backdrop-saturate-150 justify-start">
            <div className="bg-neutral-100 container mx-auto my-auto px-6">
                © Andreas Giersch. All rights reserved. Icons by{' '}
                <Link className="underline" href={'https://icons8.com/'}>
                    Icons8
                </Link>
            </div>
        </div>
    );
};

export default Footer;

'use client';
import React from 'react';
import { Navbar, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenu } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

type NavbarItemType = {
    name: string;
    path: string;
    shortName: string;
};

const NAVBAR_ITEMS: NavbarItemType[] = [
    { name: 'About', path: '/about', shortName: 'About' },
    { name: 'Work', path: '/work', shortName: 'Work' },
    { name: 'Projects', path: '/projects', shortName: 'Projects' },
    { name: 'Resume', path: '/resume', shortName: 'Resume' },
    { name: 'Contact', path: '/contact', shortName: 'Contact' },
];

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            className="p-2 justify-start h-16 bg-gray-500"
            classNames={{
                wrapper: 'justify-start',
                content: ['data-[justify=start]:grow-0'],
            }}
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden">
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="mr-4 sm:mr-0" />
            </NavbarContent>

            <Logo />

            <NavbarContent className="hidden sm:flex gap-4 ml-16 sm:max-[820px]:ml-4" justify="start">
                {NAVBAR_ITEMS.map((customNavbarItem) => (
                    <NavbarItemCustom key={customNavbarItem.name} navbarItem={customNavbarItem} />
                ))}
            </NavbarContent>
            <Menu setIsMenuOpen={setIsMenuOpen} />
        </Navbar>
    );
}

function Logo() {
    return (
        <div className="flex items-center shrink-0">
            <Link
                href="/"
                className="flex items-center rounded transition duration-200 hover:bg-gray-400 hover:text-gray-400 hover:ease-in-out focus:text-neutral-300"
            >
                <Image src="/images/icons8-data-science-64.png" alt="Logo" width={48} height={48} />
            </Link>
        </div>
    );
}

type MenuProps = {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Menu({ setIsMenuOpen }: MenuProps) {
    return (
        <NavbarMenu>
            {NAVBAR_ITEMS.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link className="w-full" onClick={() => setIsMenuOpen(false)} href={item.path}>
                        {item.name}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    );
}

function NavbarItemCustom({ navbarItem }: { navbarItem: NavbarItemType }) {
    return (
        <NavbarItem>
            <Link className="rounded  sm:max-md:w-[120px] sm:max-md:truncate" href={navbarItem.path}>
                {navbarItem.name}
            </Link>
        </NavbarItem>
    );
}

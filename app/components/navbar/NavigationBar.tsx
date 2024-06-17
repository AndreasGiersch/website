'use client';
import React from 'react';
import {
    Navbar,
    NavbarMenuToggle,
    NavbarContent,
    NavbarItem,
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem,
    NavbarMenuItem,
    NavbarMenu,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

type DropdownItemType = {
    key: string;
    description: string;
    title: string;
    url?: string;
};

type DropdownItemListType = DropdownItemType[];

const MENU_ITEMS_WEB_DEV: DropdownItemListType = [
    {
        key: 'simple_components',
        description: 'Create simple React Components for various Use cases',
        title: 'Simple Components',
        url: '/webdev/exercises',
    },
    {
        key: 'time_series',
        description: 'Time Series data visualization for various use cases',
        title: 'Time Series',
    },
    {
        key: 'heatmaps',
        description: 'Display heatmaps for various use cases',
        title: 'Heatmaps',
    },
    {
        key: 'geo_maps',
        description: 'Use open source libraries to display geographical map components',
        title: 'Geo Maps',
    },
];

const MENU_ITEMS_DATA_ENGINEERING_ANALYTICS: DropdownItemListType = [
    {
        key: 'data_visualization',
        description: 'Visualize data from any data source',
        title: 'Data Visualization',
    },
    {
        key: 'data_pipeline',
        description: 'Create data pipelines beginning from any data source leading up to a controllable UI',
        title: 'Data Pipeline',
    },
    {
        key: 'databases',
        description: 'Usage of various different database technologies ranging from relational to vector databases',
        title: 'Databases',
    },
];

const MENU_ITEMS_ALGORITHMS: DropdownItemListType = [
    {
        key: 'sorting',
        description: 'Various sorting algorithms ranging from bubble sort to quick sort',
        title: 'Sorting',
    },
    {
        key: 'searching',
        description: 'Various searching algorithms ranging from linear search to binary search',
        title: 'Searching',
    },
    {
        key: 'graph_theory',
        description: 'Various graph algorithms ranging from depth first search to breadth first search',
        title: 'Graph Theory',
    },
];

const MENU_ITEMS_DATA_SCIENCE_ML_AI: DropdownItemListType = [
    {
        key: 'ml_examples',
        description: 'Various machine learning examples ranging from linear regression to neural networks',
        title: 'ML Examples',
    },
    {
        key: 'ai_examples',
        description: 'Various artificial intelligence examples ranging from Computer Vision to NLP',
        title: 'AI Examples',
    },
    {
        key: 'data_science',
        description: 'Various data science examples ranging from data cleaning to data visualization',
        title: 'Data Science',
    },
    {
        key: 'rag',
        description: 'Retrieval Augmented Generation examples',
        title: 'Retrieval Augmented Generation',
    },
    {
        key: 'embedding_visualization',
        description: 'Visualize embeddings in 3D space',
        title: 'Embedding Visualization',
    },
];

const NAVBAR_MENU_ITEMS = [
    { name: 'Web Development', path: '/webdev' },
    { name: 'Data Engineering & Analytics', path: '/data-engineering-analytics' },
    { name: 'Algorithms', path: '/algorithms' },
    { name: 'Data Science, ML & AI', path: '/data-science-ml-ai' },
];

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            className="p-2 justify-start h-16"
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
            <div className="flex items-center">
                <Link
                    href="/"
                    className="flex items-center rounded transition duration-200 hover:bg-neutral-200 hover:text-neutral-300 hover:ease-in-out focus:text-neutral-300"
                >
                    <Image src="/images/icons8-data-science-64.png" alt="Logo" width={48} height={48} />
                </Link>
            </div>

            <NavbarContent className="hidden sm:flex gap-4 ml-16" justify="start">
                <Dropdown
                    placement="bottom-start"
                    classNames={{
                        content: 'py-1 px-1 border border-default-200 bg-white',
                    }}
                >
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent focus:ring-1 focus:ring-slate-400"
                                radius="sm"
                                variant="light"
                            >
                                {NAVBAR_MENU_ITEMS[0].name}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Web Development"
                        className="w-[340px]"
                        itemClasses={{
                            base: 'gap-4',
                        }}
                    >
                        {MENU_ITEMS_WEB_DEV.map((item) => (
                            <DropdownItem
                                key={item.key}
                                description={item.description}
                                href={item.url ? item.url : '/'}
                            >
                                <span className="font-bold">{item.title}</span>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown
                    placement="bottom-start"
                    classNames={{
                        content: 'py-1 px-1 border border-default-200 bg-white',
                    }}
                >
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                {NAVBAR_MENU_ITEMS[1].name}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Data Engineering & Analytics"
                        className="w-[340px]"
                        itemClasses={{
                            base: 'gap-4',
                        }}
                    >
                        {MENU_ITEMS_DATA_ENGINEERING_ANALYTICS.map((item) => (
                            <DropdownItem key={item.key} description={item.description}>
                                <span className="font-bold">{item.title}</span>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown
                    placement="bottom-start"
                    classNames={{
                        content: 'py-1 px-1 border border-default-200 bg-white',
                    }}
                >
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                {NAVBAR_MENU_ITEMS[2].name}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Algorithms"
                        className="w-[340px]"
                        itemClasses={{
                            base: 'gap-4',
                        }}
                    >
                        {MENU_ITEMS_ALGORITHMS.map((item) => (
                            <DropdownItem key={item.key} description={item.description}>
                                <span className="font-bold">{item.title}</span>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown
                    placement="bottom-start"
                    classNames={{
                        content: 'py-1 px-1 border border-default-200 bg-white',
                    }}
                >
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                {NAVBAR_MENU_ITEMS[3].name}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Data Science, ML & AI"
                        className="w-[340px]"
                        itemClasses={{
                            base: 'gap-4',
                        }}
                    >
                        {MENU_ITEMS_DATA_SCIENCE_ML_AI.map((item) => (
                            <DropdownItem key={item.key} description={item.description}>
                                <span className="font-bold">{item.title}</span>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarMenu>
                {NAVBAR_MENU_ITEMS.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? 'warning'
                                    : index === NAVBAR_MENU_ITEMS.length - 1
                                      ? 'danger'
                                      : 'foreground'
                            }
                            onClick={() => setIsMenuOpen(false)}
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

import React from 'react';

import Link from 'next/link';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';
import BackButton from '@/components/BackButton';

const webdevPages = [
    {
        path: '/exercises',
        name: 'Simple React Exercises taken from official Tutorials',
        description: 'Sample Description. Edit later.',
    },
    { path: '/geo-maps', name: 'Geographical Maps', description: 'Sample Description. Edit later.' },
    { path: '/heatmaps', name: 'Heatmaps for various data formats', description: 'Sample Description. Edit later.' },
    { path: '/time-series', name: 'Time Series Data Visualization', description: 'Sample Description. Edit later.' },
];

const webdevCard = ({ index, path, name, description }) => {
    return (
        <Card key={index} className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="Exercise Image"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{name}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link href={path}>Go to Exercise: {name}</Link>
            </CardFooter>
        </Card>
    );
};

const Webdev = () => {
    return (
        <div className="flex w-full h-full flex-col items-center justify-start">
            <div id="content-top" className="flex w-full h-32 pl-10 pt-6">
                <h3 className="text-3xl font-bold dark:text-white">
                    Here you can find a list of all implemented coding exercises
                </h3>
            </div>

            <div id="content-middle" className="flex w-full grow items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                    {webdevPages.map((page, index) => {
                        const fullPath = `/webdev/exercises/${page.path}`;
                        return webdevCard({ index, path: fullPath, name: page.name, description: page.description });
                    })}
                </div>
            </div>
            <div id="content-bottom" className="flex w-full h-32 pl-10 pt-10">
                <BackButton path={'/'} className="bg-slate-200 rounded-sm border">
                    Go Back
                </BackButton>
            </div>
        </div>
    );
};

export default Webdev;

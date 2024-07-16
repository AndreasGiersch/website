import React from 'react';

import BackButton from '@/components/BackButton';
import CustomCard from '@/components/CustomCard/CustomCard';

const exercisePages = [
    {
        path: '/filterable-product-table',
        name: 'Filterable Product Table',
        description: 'A sample product table with filtering and sorting.',
    },
    { path: '/tictactoe', name: 'Tic Tac Toe', description: 'A simple tic-tac-toe game.' },
];

const Exercises = () => {
    return (
        <div className="flex w-full h-full flex-col items-center justify-start">
            <div id="content-top" className="flex w-full h-32 pl-10 pt-6">
                <h3 className="text-3xl font-bold dark:text-white">
                    Here you can find a list of all implemented coding exercises
                </h3>
            </div>

            <div id="content-middle" className="flex w-full grow items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                    {exercisePages.map((page, index) => {
                        return CustomCard({
                            index,
                            path: `/webdev/exercises/${page.path}`,
                            name: page.name,
                            description: page.description,
                        });
                    })}
                </div>
            </div>
            <div id="content-bottom" className="flex w-full h-32 pl-10 pt-10">
                <BackButton path={'/webdev'} className="bg-slate-200 rounded-sm border">
                    Go Back
                </BackButton>
            </div>
        </div>
    );
};

export default Exercises;

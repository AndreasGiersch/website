import React from 'react';

import Link from 'next/link';

const url = '/exercisesIndex';
const exercisePaths = ['/filterableProductTable', '/tic-tac-toe'];

const Exercises = () => {
    return (
        <>
            <h3>Here you can find a list of all implemented coding exercises</h3>
            {exercisePaths.map((path, index) => (
                <Link key={index} href={`${url}/${path}`}>
                    <a>{path}</a>
                </Link>
            ))}
            <Link href="/">Go back</Link>
        </>
    );
};

export default Exercises;

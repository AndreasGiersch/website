import React from 'react';

import Link from 'next/link';

const exercisePaths = ['/filterable-product-table', '/tictactoe'];

const Exercises = () => {
    return (
        <>
            <h3>Here you can find a list of all implemented coding exercises</h3>
            {exercisePaths.map((path, index) => (
                <Link key={index} href={`/webdev/exercises/${path}`}>
                    {path}
                </Link>
            ))}
            <Link href="/">Go back</Link>
        </>
    );
};

export default Exercises;

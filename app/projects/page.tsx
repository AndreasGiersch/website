'use client';
import DropdownCustom, { MenuDefinition, NavigationDropdownItemType } from '@/components/DropdownCustom';

import { Card, CardBody, CardHeader } from '@nextui-org/react';

const MENU_WEB_DEV: MenuDefinition = {
    ariaLabel: 'Web Development',
    items: [
        {
            key: 'simple_components',
            description: 'Create simple React Components for various Use cases',
            title: 'Simple Components',
            url: '/projects/webdev/exercises',
        },
        {
            key: 'time_series',
            description: 'Time Series data visualization for various use cases',
            title: 'Time Series',
            url: '/projects/webdev/time-series',
        },
        {
            key: 'heatmaps',
            description: 'Display heatmaps for various use cases',
            title: 'Heatmaps',
            url: '/projects/webdev/heatmaps',
        },
        {
            key: 'geo_maps',
            description: 'Use open source libraries to display geographical map components',
            title: 'Geo Maps',
            url: '/projects/webdev/geo-maps',
        },
    ],
};

const MENU_DATA_ENGINEERING_ANALYTICS: MenuDefinition = {
    ariaLabel: 'Data Engineering & Analytics',
    items: [
        {
            key: 'data_visualization',
            description: 'Visualize data from any data source',
            title: 'Data Visualization',
            url: '/data-engineering-analytics/data-visualization',
        },
        {
            key: 'data_pipeline',
            description: 'Create data pipelines beginning from any data source leading up to a controllable UI',
            title: 'Data Pipeline',
            url: '/data-engineering-analytics/data-pipeline',
        },
        {
            key: 'databases',
            description: 'Usage of various different database technologies ranging from relational to vector databases',
            title: 'Databases',
            url: '/data-engineering-analytics/databases',
        },
    ],
};

const MENU_ALGORITHMS: MenuDefinition = {
    ariaLabel: 'Algorithms',
    items: [
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
    ],
};

const MENU_DATA_SCIENCE_ML_AI: MenuDefinition = {
    ariaLabel: 'Data Science, ML & AI',
    items: [
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
    ],
};

const CARD_ITEMS: NavigationDropdownItemType[] = [
    { name: 'Algorithms', path: '/algorithms', shortName: 'Algorithms', menu: MENU_ALGORITHMS },
    {
        name: 'Data Engineering & Analytics',
        path: '/data-engineering-analytics',
        shortName: 'Data Eng.',
        menu: MENU_DATA_ENGINEERING_ANALYTICS,
    },
    {
        name: 'Data Science, ML & AI',
        path: '/data-science-ml-ai',
        shortName: 'Data Science',
        menu: MENU_DATA_SCIENCE_ML_AI,
    },
    { name: 'Web Development', path: '/webdev', shortName: 'Web Dev', menu: MENU_WEB_DEV },
];

function Projects() {
    return (
        <div className="size-full flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <span className="text-2xl font-bold">Algorithms</span>
                    </CardHeader>
                    <CardBody>
                        <DropdownCustom navigationDropdownItem={CARD_ITEMS[0]} />
                        <p>Here you can find a list of all algorithms examples.</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <span className="text-2xl font-bold">Data Engineering & Analytics</span>
                    </CardHeader>
                    <CardBody>
                        <DropdownCustom navigationDropdownItem={CARD_ITEMS[1]} />
                        <p>Here you can find data engineering and analytics projects.</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <span className="text-2xl font-bold">Data Science, ML & AI</span>
                    </CardHeader>
                    <CardBody>
                        <DropdownCustom navigationDropdownItem={CARD_ITEMS[2]} />
                        <p>Here you can find data science, machine learning, and AI projects.</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <span className="text-2xl font-bold">Web Development</span>
                    </CardHeader>
                    <CardBody>
                        <DropdownCustom navigationDropdownItem={CARD_ITEMS[3]} />
                        <p>Here you can find web development projects.</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Projects;

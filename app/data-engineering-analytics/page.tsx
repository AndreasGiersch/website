'use client';
import BackButton from '@/components/BackButton';
import CustomCard from '@/components/CustomCard/CustomCard';

const DataEngineeringAnalyticsPages = [
    {
        path: '/data-visualization',
        name: 'Visualize data from any data source',
        description: 'Sample Description. Edit later.',
    },
    {
        path: '/data-pipeline',
        name: 'Create data pipelines beginning from any data source leading up to a controllable UI',
        description: 'Sample Description. Edit later.',
    },
    {
        path: '/databases',
        name: 'Usage of various different database technologies ranging from relational to vector databases',
        description: 'Sample Description. Edit later.',
    },
];

const DataEngineeringAnalytics = () => {
    return (
        <div className="flex w-full h-full flex-col items-center justify-start">
            <div id="content-top" className="flex w-full h-32 pl-10 pt-6">
                <h3 className="text-3xl font-bold dark:text-white">
                    Here you can find a list of all implemented coding exercises
                </h3>
            </div>

            <div id="content-middle" className="flex w-full grow items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                    {DataEngineeringAnalyticsPages.map((page, index) => {
                        return CustomCard({
                            index,
                            path: `/data-engineering-analytics${page.path}`,
                            name: page.name,
                            description: page.description,
                        });
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

export default DataEngineeringAnalytics;

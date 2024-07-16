import Link from 'next/link';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';

type CustomCardProps = {
    index: number;
    path: string;
    name: string;
    description: string;
};

const CustomCard = ({ index, path, name, description }: CustomCardProps) => {
    return (
        <Card key={index} className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="Image"
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
                <Link href={path}>
                    <span className="font-semibold">Go to:</span> {name}
                </Link>
            </CardFooter>
        </Card>
    );
};

export default CustomCard;

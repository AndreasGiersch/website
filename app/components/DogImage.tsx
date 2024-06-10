import Image from 'next/image';

type DogImageProps = {
    name: string;
    alt: string;
};

export function DogImage({ name, alt }: DogImageProps) {
    return <Image src={`/images/${name}.jpg`} alt={alt} width={100} height={100} />;
}

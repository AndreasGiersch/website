'use client';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import type { ButtonVariantProps } from '@nextui-org/react';
import { PropsWithChildren } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

type BackButtonProps = {
    path: string;
    color?: ButtonVariantProps['color'];
    variant?: ButtonVariantProps['variant'];
    className?: string;
};

const BackButton = (props: PropsWithChildren<BackButtonProps>) => {
    const { path, color = 'default', variant = 'flat', className, children } = props;
    return (
        <Button
            as={Link}
            href={path}
            color={color}
            variant={variant}
            type="button"
            className={`${className} text-gray-800`}
            startContent={<ArrowLeftIcon className="size-5" />}
        >
            {children}
        </Button>
    );
};
export default BackButton;

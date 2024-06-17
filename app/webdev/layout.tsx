import { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

export default function WebdevLayout({ children }: LayoutProps) {
    return <div className="flex w-full h-full flex-col items-center">{children}</div>;
}

import { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

export default function HeatmapsLayout({ children }: LayoutProps) {
    return <div className="flex flex-col items-center">{children}</div>;
}

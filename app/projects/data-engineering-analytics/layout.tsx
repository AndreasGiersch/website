import { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

export default function DataEngineeringAnalyticsLayout({ children }: LayoutProps) {
    return <div className="flex flex-col items-center">{children}</div>;
}

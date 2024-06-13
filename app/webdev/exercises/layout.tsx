import { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

export default function ExercisesLayout({ children }: LayoutProps) {
    return <div className="flex min-h-screen flex-col items-center">{children}</div>;
}

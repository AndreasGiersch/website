import { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

export default function TicTacToeLayout({ children }: LayoutProps) {
    return <div className="flex flex-col items-center justify-center w-full">{children}</div>;
}

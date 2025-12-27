import { ReactNode } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">{children}</div>
    </div>
  );
}

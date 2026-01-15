import Link from 'next/link';

interface TocEntry {
  value: string;
  depth: number;
  id?: string;
  children?: Array<TocEntry>;
}

export default function TableOfContentsLink({ item }: { item: TocEntry }) {
  const { id, value, children } = item;
  return (
    <div className="space-y-2">
      <Link
        key={id}
        href={`#${id}`}
        className={`hover:text-foreground text-muted-foreground block font-medium transition-colors`}
      >
        {value}
      </Link>
      {children && children.length > 0 && (
        <div className="space-y-2 pl-4">
          {children.map((subItem) => (
            <TableOfContentsLink key={subItem.id} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { NotionTag } from '@/types/notion';

interface TagSectionProps {
  tags: NotionTag[];
}

export default function TagSection({ tags }: TagSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>태그목록</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {tags.map(({ name, count }) => (
            <Link href={`?tag=${name}`} key={name}>
              <div className="hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors">
                <span>{name}</span>
                <span>{count}</span>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

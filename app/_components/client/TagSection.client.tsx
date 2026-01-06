'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { TagFilterItem } from '@/types/blog';
import { cn } from '@/lib/utils';
import { use } from 'react';

interface TagSectionProps {
  tags: Promise<TagFilterItem[]>;
  selectedTag: string;
}

export default function TagSection({ tags, selectedTag }: TagSectionProps) {
  const allTags = use(tags);
  return (
    <Card>
      <CardHeader>
        <CardTitle>태그 목록</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {allTags.map(({ name, count }) => (
            <Link href={`?tag=${name}`} key={name}>
              <div
                className={cn(
                  'hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors',
                  selectedTag === name && 'bg-muted-foreground/10 text-foreground font-medium'
                )}
              >
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

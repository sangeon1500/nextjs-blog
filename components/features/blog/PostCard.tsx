'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/date';
import { Calendar, User } from 'lucide-react';
import Image from 'next/image';
import { Post } from '@/types/blog';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { coverImage, title, description, tags, author, date } = post;
  return (
    <Card className="group bg-card/50 border-border/40 hover:border-primary/20 overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      {coverImage && (
        <div className="relative aspect-2/1 overflow-hidden">
          <div className="from-background/20 absolute inset-0 z-10 bg-linear-to-t to-transparent" />
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 font-medium transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h2 className="group-hover:text-primary mb-2 text-xl font-bold tracking-tight transition-colors">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{description}</p>
        )}
        <div className="text-muted-foreground mt-6 flex items-center gap-x-4 text-sm">
          {author && (
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
          )}
          {date && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time>{formatDate(date)}</time>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

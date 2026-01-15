import TagSection from '@/app/_components/TagSection';
import ProfileSection from '@/app/_components/ProfileSection';
import ContactSection from '@/app/_components/ContactSection';
import { getPublishedPosts, getTags } from '@/lib/notion';
import HeaderSection from '@/app/_components/HeaderSection';
import PostList from '@/components/features/blog/PostList';
import { Suspense } from 'react';
import TagSectionSkeleton from '../_components/TagSectionSkeleton';
import PostListSkeleton from '@/components/features/blog/PostListSkeleton';

interface BlogProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Blog({ searchParams }: BlogProps) {
  const { tag } = await searchParams;
  const selectedTag = tag || '전체';
  const tags = await getTags();

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr_220px]">
        {/* 좌측 사이드바 */}
        <aside className="order-2 md:order-0">
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSection tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>
        <div className="order-3 space-y-8 md:order-0">
          {/* 섹션 제목 */}
          <HeaderSection selectedTag={selectedTag} />
          {/* 블로그 카드 그리드 */}
          <Suspense fallback={<PostListSkeleton />}>
            <PostList
              postsPromise={getPublishedPosts({ tag: selectedTag, sort: 'latest', pageSize: 2 })}
            />
          </Suspense>
        </div>
        {/* 우측 사이드바 */}
        <aside className="order-1 flex flex-col gap-6 md:order-0">
          <ProfileSection />
          <ContactSection />
        </aside>
      </div>
    </div>
  );
}

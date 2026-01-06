import TagSectionClient from './_components/client/TagSection.client';
import ProfileSection from './_components/ProfileSection';
import ContactSection from './_components/ContactSection';
import HeaderSection from './_components/HeaderSection';
import PostListClient from '@/components/features/blog/client/PostList.client';
import { Suspense } from 'react';
import { getTags } from '@/lib/notion';
import PostListSkeleton from '@/components/features/blog/PostListSkeleton';
import TagSectionSkeleton from './_components/TagSectionSkeleton';

interface HomeProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag } = await searchParams;
  const selectedTag = tag || '전체';
  const tags = getTags();

  return (
    <div className="container">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        <aside>
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSectionClient tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <HeaderSection selectedTag={selectedTag} />
          {/* 블로그 카드 그리드 */}
          <Suspense fallback={<PostListSkeleton />}>
            <PostListClient />
          </Suspense>
        </div>
        <aside>
          <ProfileSection />
          <ContactSection />
        </aside>
      </div>
    </div>
  );
}

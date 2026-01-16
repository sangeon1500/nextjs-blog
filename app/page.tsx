import TagSectionClient from './_components/client/TagSection.client';
import ProfileSection from './_components/ProfileSection';
import ContactSection from './_components/ContactSection';
import HeaderSection from './_components/HeaderSection';
import PostList from '@/components/features/blog/PostList';
import { Suspense } from 'react';
import { getPublishedPosts, getTags } from '@/lib/notion';
import PostListSkeleton from '@/components/features/blog/PostListSkeleton';
import TagSectionSkeleton from './_components/TagSectionSkeleton';
import { Metadata } from 'next';

interface HomeProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export const metadata: Metadata = {
  title: '홈',
  description: '프론트엔드 개발자 박상언의 블로그입니다. 개발 지식과 경험을 공유합니다.',
  alternates: {
    canonical: '/',
  },
};

export default async function Home({ searchParams }: HomeProps) {
  const { tag } = await searchParams;
  const selectedTag = tag || '전체';

  const tags = getTags();
  const postPromise = getPublishedPosts({ tag: selectedTag, sort: 'latest', pageSize: 2 });

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
            <PostList postsPromise={postPromise} />
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

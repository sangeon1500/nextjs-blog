import TagSection from '@/app/_components/TagSection';
import ProfileSection from '@/app/_components/ProfileSection';
import ContactSection from '@/app/_components/ContactSection';
import { getPublishedPosts, getTags } from '@/lib/notion';
import HeaderSection from '@/app/_components/HeaderSection';
import PostList from '@/components/features/blog/PostList';
import { TagFilterItem } from '@/types/blog';

interface BlogProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Blog({ searchParams }: BlogProps) {
  const { tag } = await searchParams;
  const selectedTag = tag || '전체';
  const tags = await getTags();

  return (
    <div className="container">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        <aside>
          <TagSection tags={tags as TagFilterItem[]} selectedTag={selectedTag} />
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <HeaderSection selectedTag={selectedTag} />
          {/* 블로그 카드 그리드 */}
          <PostList postsPromise={getPublishedPosts()} />
        </div>
        <aside>
          <ProfileSection />
          <ContactSection />
        </aside>
      </div>
    </div>
  );
}

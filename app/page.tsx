
import { PostCard } from '@/components/features/blog/PostCard';
import TagSection from './_components/TagSection';
import ProfileSection from './_components/ProfileSection';
import ContactSection from './_components/ContactSection';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/notion';
import SortSelect from './_components/client/SortSelect';

const mockTags = [
  { id: 'all', name: '전체', count: 20 },
  { id: 'html', name: 'HTML', count: 10 },
  { id: 'css', name: 'CSS', count: 5 },
  { id: 'javascript', name: 'JavaScript', count: 3 },
  { id: 'react', name: 'React', count: 3 },
  { id: 'nextjs', name: 'Next.js', count: 3 },
];

export default async function Home() {
  const posts = await getPublishedPosts();

  return (
    <div className="container">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        <aside>
          <TagSection tags={mockTags} />
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>
            <SortSelect />
          </div>
          {/* 블로그 카드 그리드 */}
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Link>
            ))}
          </div>
        </div>
        <aside>
          <ProfileSection />
          <ContactSection />
        </aside>
      </div>
    </div>
  );
}

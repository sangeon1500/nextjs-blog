import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
  // 마크다운과 MDX 파일을 포함하도록 `pageExtensions` 구성
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // 필요한 경우 여기에 다른 Next.js 설정을 추가할 수 있습니다
};

const withMDX = createMDX({
  // 필요한 마크다운 플러그인을 여기에 추가
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

// MDX 설정을 Next.js 설정과 병합
export default withMDX(nextConfig);

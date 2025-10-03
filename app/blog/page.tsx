import { Metadata } from 'next';
import PostCard from '@/components/PostCard';
import { getSortedPostsData } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | NeuroXcel Learn',
  description: 'Educational resources, strategies, and insights for neurodivergent learners.',
  openGraph: {
    title: 'Blog | NeuroXcel Learn',
    description: 'Educational resources, strategies, and insights for neurodivergent learners.',
  },
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Insights, strategies, and resources for neurodivergent learners and educators.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {allPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

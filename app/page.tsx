import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { getSortedPostsData, getFeaturedPosts } from '@/lib/posts';

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getSortedPostsData().slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Welcome to NeuroXcel Learn
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 text-indigo-100">
              Tools & strategies for neurodivergent learners by NeuroXcel Publishing House
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-10 text-indigo-50">
              Empowering neurodiverse minds through accessible education, innovative AI tools, 
              and evidence-based learning strategies designed specifically for ADHD, autism, 
              dyslexia, and other learning differences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Explore Our Blog
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} featured={true} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
            <Link 
              href="/blog"
              className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              View all posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-indigo-50 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
            At NeuroXcel Learn, we believe every neurodivergent learner deserves access to 
            resources that work with their unique brain, not against it. We combine cutting-edge 
            AI technology with evidence-based educational strategies to create an inclusive 
            learning environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-3">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessible Education</h3>
              <p className="text-gray-600">
                Resources designed with accessibility at the core, supporting diverse learning styles and needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-3">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Tools</h3>
              <p className="text-gray-600">
                Innovative AI solutions that adapt to individual learning patterns and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-3">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a supportive community of neurodivergent learners, educators, and advocates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


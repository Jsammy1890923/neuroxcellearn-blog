import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import type { PostMetadata } from '@/lib/posts';

interface PostCardProps {
  post: PostMetadata;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const formattedDate = format(parseISO(post.date), 'MMMM d, yyyy');

  return (
    <article 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="p-6">
        {post.featured && (
          <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Featured
          </span>
        )}
        <Link href={`/blog/${post.slug}`}>
          <h2 className={`font-bold text-gray-900 hover:text-indigo-600 transition-colors mb-3 ${
            featured ? 'text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h2>
        </Link>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time dateTime={post.date}>{formattedDate}</time>
          {post.author && (
            <>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </>
          )}
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          Read more
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

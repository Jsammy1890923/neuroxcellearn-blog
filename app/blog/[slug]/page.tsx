import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { getPostData, getAllPostSlugs } from '@/lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await getPostData(slug);
    
    return {
      title: `${post.title} | NeuroXcel Learn`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
    };
  } catch {
    return {
      title: 'Post Not Found | NeuroXcel Learn',
    };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  
  let post;
  try {
    post = await getPostData(slug);
  } catch {
    notFound();
  }

  const formattedDate = format(parseISO(post.date), 'MMMM d, yyyy');

  return (
    <article className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-4">
            <a 
              href="/blog" 
              className="inline-flex items-center text-indigo-100 hover:text-white transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              Back to Blog
            </a>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-indigo-100">
            <time dateTime={post.date}>{formattedDate}</time>
            {post.author && (
              <>
                <span>•</span>
                <span>By {post.author}</span>
              </>
            )}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}

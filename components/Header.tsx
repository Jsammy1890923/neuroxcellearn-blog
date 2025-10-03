import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-indigo-600">NeuroXcel Learn</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              aria-label="Home"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              aria-label="Blog"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              aria-label="About"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              aria-label="Contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

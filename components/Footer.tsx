export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-4">NeuroXcel Learn</h3>
            <p className="text-gray-600 text-sm">
              Part of NeuroXcel Publishing House, serving education and AI for neurodiverse minds.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-indigo-600 transition-colors">Blog</a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-600 transition-colors">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Our Mission</h4>
            <p className="text-sm text-gray-600">
              Empowering neurodivergent learners with accessible tools, strategies, and resources for success.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NeuroXcel Publishing House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

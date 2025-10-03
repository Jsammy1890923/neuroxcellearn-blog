import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | NeuroXcel Learn',
  description: 'Learn about NeuroXcel Learn and our mission to empower neurodivergent learners through accessible education and AI-powered tools.',
  openGraph: {
    title: 'About | NeuroXcel Learn',
    description: 'Learn about NeuroXcel Learn and our mission to empower neurodivergent learners.',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About NeuroXcel Learn</h1>
          <p className="text-xl text-indigo-100 max-w-2xl">
            Empowering neurodivergent learners through accessible education and innovative AI tools.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              NeuroXcel Learn is a proud initiative of NeuroXcel Publishing House, dedicated to 
              creating inclusive educational resources for neurodivergent learners. We recognize 
              that traditional learning methods don't work for everyone, and we're committed to 
              changing that narrative.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our platform combines evidence-based educational strategies with cutting-edge AI 
              technology to create personalized learning experiences for individuals with ADHD, 
              autism, dyslexia, and other learning differences.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">Neurodiversity is Strength</h3>
              <p className="text-gray-700">
                We celebrate cognitive diversity and believe that different ways of thinking and 
                learning are valuable assets, not deficits to be corrected.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Accessibility First</h3>
              <p className="text-gray-700">
                Every resource we create prioritizes accessibility, ensuring that all learners can 
                engage with content in ways that work for their unique needs.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Evidence-Based Approach</h3>
              <p className="text-gray-700">
                Our strategies and tools are grounded in research and validated by educational 
                professionals and neuroscience experts.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Community-Driven</h3>
              <p className="text-gray-700">
                We listen to and learn from neurodivergent individuals, educators, and families to 
                continuously improve our offerings.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <div className="prose prose-lg">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Educational Blog:</strong> Research-backed articles, strategies, and insights for neurodivergent learners and educators.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>AI-Powered Tools:</strong> Innovative solutions that adapt to individual learning styles and cognitive patterns.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Learning Resources:</strong> Accessible materials designed specifically for neurodiverse learners.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Community Support:</strong> A welcoming space for neurodivergent individuals, families, and educators to connect and share.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Join Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">
            Whether you're a neurodivergent learner, educator, parent, or advocate, there's a 
            place for you in the NeuroXcel Learn community. Together, we can create a more 
            inclusive and accessible educational landscape.
          </p>
          <div className="text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

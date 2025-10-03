// components/Layout.js

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

/**
 * NeuroXcel Layout Component
 *
 * Props:
 * - title: sets the page <title>
 * - description: sets meta description
 * - showHeader: toggles <Header />
 * - showFooter: toggles <Footer />
 *
 * Includes dark mode, responsive layout, and accessibility.
 */

export default function Layout({
  children,
  title = 'NeuroXcel – Learn Differently',
  description = 'Accessible tools and strategies for neurodiverse learners.',
  showHeader = true,
  showFooter = true
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-white dark:bg-gray-900 text-sm p-2 z-50"
      >
        Skip to content
      </a>

      <div className="flex flex-col min-h-screen bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md text-gray-900 dark:text-gray-100 dark:from-gray-900/30 dark:to-gray-800/10">
        {showHeader && <Header />}

        {/* Main content area */}
        <main
          id="main-content"
          role="main"
          className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {children}
        </main>

        {showFooter && <Footer />}
      </div>
    </>
  );
}

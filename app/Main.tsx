import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Gif from '@/data/gif.gif'

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] absolute inset-0 bg-[size:75px_75px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Master Your Posture with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Targeted Movement Breaks
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Stop sitting in silence. Our Chrome extension generates simple, effective posture
              exercises to help you reset your alignment and reduce tension—one random stretch at a
              time.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://chromewebstore.google.com/detail/random-posture-exercises/cpbkmonhcfbgoaediifolmiagbnenich?hl=en"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:bg-blue-700 hover:shadow-blue-500/50"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
                </svg>
                Add to Chrome — It's Free
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg ring-2 ring-blue-600 transition-all hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:ring-blue-400 dark:hover:bg-gray-700"
              >
                Try the Randomizer
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What it Is Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A Simple Way to Break the Desk-Slump
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Most office workers stay in a "static" posture for hours, leading to stiff necks and
              rounded shoulders. Random Posture Exercises is a Chrome extension designed to give you
              instant inspiration for your next movement break. Instead of doing the same stretch
              every day, our tool provides variety to keep your body mobile and your mind engaged.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section: How the Extension Works */}
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How the Extension Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We kept it simple so you can stay focused.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
                <svg
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Instant Exercise Generation
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Open the extension to receive a random posture-correcting movement.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-4 inline-flex rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900">
                <svg
                  className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                No-Fuss Interface
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Designed to be lightweight and fast—no complex setups or account creation required.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
              <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
                <svg
                  className="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Evidence-Based Stretches
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                From scapular retractions to thoracic openers, every suggestion is chosen to
                counteract the physical toll of computer work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Section: Why Randomization Matters for Posture */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Randomization Matters for Posture
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Doing the same exercise repeatedly can lead to muscle adaptation and boredom. By
              randomizing your movement breaks, you:
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
                <svg
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Engage Different Muscle Groups
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Target the neck, shoulders, and lower back throughout the day.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 inline-flex rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900">
                <svg
                  className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Build Better Habits
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Creating a "cue-based" habit (opening the extension) is more effective for
                long-term behavior change than relying on willpower alone.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-8 shadow-lg dark:bg-gray-800">
              <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
                <svg
                  className="h-8 w-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Reduce Repetitive Strain
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Varied movement helps distribute physical stress across the body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about improving your posture
            </p>
          </div>
          <div className="mt-12 space-y-8">
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-gray-800 dark:to-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Do I need equipment for these exercises?
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                No. Every exercise suggested by the extension is designed to be performed at your
                desk or in a small office space with zero specialized equipment.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-gray-800 dark:to-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Is the extension free?
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Yes. Random Posture Exercises is completely free to use and install from the Chrome
                Web Store.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-gray-800 dark:to-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                How does this help with "Tech Neck"?
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                By providing movements like Chin Tucks and Chest Openers, the extension helps
                reverse the forward-leaning position caused by looking at screens, reducing the
                strain on your cervical spine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-bold text-white">Free</div>
              <div className="mt-2 text-lg text-blue-100">Forever</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">30+</div>
              <div className="mt-2 text-lg text-blue-100">Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">0</div>
              <div className="mt-2 text-lg text-blue-100">Equipment Needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Trust Signal Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Built for the Modern Workplace
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Currently helping thousands of users improve their spinal health via our web tools and
            Chrome extension. Upcoming mobile app for iOS and Android arriving soon.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-lg ring-2 ring-blue-600 transition-all hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:ring-blue-400 dark:hover:bg-gray-700"
            >
              Try Random Exercises
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="https://chromewebstore.google.com/detail/random-posture-exercises/cpbkmonhcfbgoaediifolmiagbnenich?hl=en"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
              </svg>
              Add to Chrome — It's Free
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

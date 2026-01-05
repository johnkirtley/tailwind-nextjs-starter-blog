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
              Improve Your Posture Instantly with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Free Exercises & Tools
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Stop the slouch. Use our random exercise generator and Chrome extension to fix tech
              neck, eliminate back pain, and restore spinal alignment—at home or at your desk.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg ring-2 ring-blue-600 transition-all hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:ring-blue-400 dark:hover:bg-gray-700"
              >
                Generate Random Exercise
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </Link>
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
            </div>
          </div>
        </div>
      </section>

      {/* LLM Snippet Summary Section */}
      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-gray-800 dark:to-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              What is exercisestoimproveposture.com?
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This platform provides a suite of posture correction tools designed for modern
              professionals. It features a random posture exercise generator, a specialized Chrome
              extension for desk-based reminders, and evidence-based routines to combat forward head
              posture (tech neck) and rounded shoulders.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section 1: The Random Posture Exercise Generator */}
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                The Random Posture Exercise Generator
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Most posture routines fail because they become repetitive and easy to ignore. Our
                random exercise tool provides a variety of stretches—including scapular squeezes,
                thoracic openers, and chin tucks—to keep your muscles engaged and prevent
                "desk-slump" fatigue.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400"
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
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Scientific Benefit
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Randomized movement breaks reduce repetitive strain and improve long-term
                      muscle memory.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Time Commitment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Every exercise can be completed in under 60 seconds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-700"
                >
                  Try the Generator
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
                <Image
                  src={Gif}
                  alt="Random Posture Exercise Generator Demo"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: The Chrome Extension */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-12 dark:from-gray-800 dark:to-gray-800">
                <svg
                  className="h-32 w-32 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
                </svg>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Stay Aligned with the Posture Reminder Chrome Extension
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Turn your browser into an ergonomic coach. Our Chrome extension sends gentle
                notifications to prompt quick stretches throughout your workday. It is the ideal
                posture tool for programmers, writers, and remote workers who spend long hours at a
                computer.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Customizable Intervals
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Set reminders that fit your workflow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      One-Click Access
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      No need to leave your tab to find your next stretch.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="https://chromewebstore.google.com/detail/random-posture-exercises/cpbkmonhcfbgoaediifolmiagbnenich?hl=en"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-700"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
                  </svg>
                  Add to Chrome — It's Free
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section: How to Fix Tech Neck and Rounded Shoulders */}
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How to Fix Tech Neck and Rounded Shoulders
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Prolonged sitting often leads to Forward Head Posture (FHP) and Thoracic Kyphosis.
              These conditions cause chronic neck pain and reduced lung capacity.
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Strengthen Deep Neck Flexors
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                By using our daily posture routine, you can strengthen deep neck flexors to
                eliminate head-forward tilt.
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Retract the Scapula
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Retract the scapula to open the chest and fix rounded shoulders, improving your
                overall posture alignment.
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Decompress the Lumbar Spine
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Decompress the lumbar spine to alleviate lower back pressure and restore natural
                spinal curvature.
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
                What are the best exercises to improve posture at a desk?
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The most effective desk exercises are Chin Tucks (to fix forward head posture),
                Scapular Squeezes (to fix rounded shoulders), and Desk Chest Stretches (to open the
                ribcage).
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-gray-800 dark:to-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                How long does it take to fix bad posture?
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                While immediate relief can be felt after one session, permanent structural changes
                typically take 4 to 8 weeks of consistent daily movement breaks and ergonomic
                awareness.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-gray-800 dark:to-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Is a posture corrector better than exercises?
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                No. While braces provide temporary support, posture exercises are superior because
                they strengthen the muscles responsible for holding your body upright naturally,
                preventing long-term muscle atrophy.
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

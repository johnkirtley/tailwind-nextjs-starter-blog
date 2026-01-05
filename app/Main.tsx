import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] absolute inset-0 bg-[size:75px_75px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {' '}
                Posture
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              {siteMetadata.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <Link
                href="https://chromewebstore.google.com/detail/random-posture-exercises/cpbkmonhcfbgoaediifolmiagbnenich?hl=en"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:bg-blue-700 hover:shadow-blue-500/50"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
                </svg>
                Add to Chrome - It's Free
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

      {/* Features Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Choose This Extension?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to improve your posture while you work
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="inline-flex rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
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
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Quick & Effective
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Each exercise takes just 30-60 seconds. Perfect for busy schedules and quick breaks
                throughout your day.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="inline-flex rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Evidence-Based
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                All exercises are based on physiotherapy research and proven to improve posture and
                reduce discomfort.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="inline-flex rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Variety & Randomization
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Never get bored with our random exercise generator. Each session brings fresh
                movements to target different muscle groups.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="inline-flex rounded-lg bg-green-100 p-3 dark:bg-green-900">
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-400"
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
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Instant Access
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Launch instantly from your browser toolbar. No accounts, no setup, no hassle. Just
                one click to better posture.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="inline-flex rounded-lg bg-pink-100 p-3 dark:bg-pink-900">
                <svg
                  className="h-8 w-8 text-pink-600 dark:text-pink-400"
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
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Privacy First
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Your data stays with you. No tracking, no data collection, no intrusive permissions.
                Just exercises.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="inline-flex rounded-lg bg-orange-100 p-3 dark:bg-orange-900">
                <svg
                  className="h-8 w-8 text-orange-600 dark:text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Desk-Friendly
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                All exercises can be done at your desk, no special equipment needed. Perfect for
                office workers and remote professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Transform Your Health & Well-being
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Regular posture exercises can dramatically improve your quality of life. Here's what
                you can expect:
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <svg
                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Improved Spinal Alignment
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Strengthen your core and back muscles to support proper spinal alignment and
                      prevent long-term damage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                      <svg
                        className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Reduced Neck & Back Pain
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Relieve tension and discomfort caused by prolonged sitting and poor posture
                      habits.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                      <svg
                        className="h-6 w-6 text-purple-600 dark:text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Enhanced Energy & Mood
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Better posture improves breathing and circulation, leading to increased energy
                      levels and improved mood.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                      <svg
                        className="h-6 w-6 text-green-600 dark:text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Boosted Confidence
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Stand taller and feel more confident with improved posture that positively
                      affects how you present yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
                <Image
                  src="/data/gif.gif"
                  alt="Posture Exercise Demo"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-800">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">30s</div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Average exercise time
                  </div>
                </div>
              </div>
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

      {/* Final CTA Section */}
      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ready to Transform Your Posture?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join thousands of users who have improved their posture and reduced pain. Get started
            today for free.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="https://chromewebstore.google.com/detail/random-posture-exercises/cpbkmonhcfbgoaediifolmiagbnenich?hl=en"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728z" />
              </svg>
              Add to Chrome - It's Free
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

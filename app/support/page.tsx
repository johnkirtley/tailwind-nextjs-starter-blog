import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Support' })

export default function Support() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Support
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            We're here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
        <div className="py-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Have a question about your posture journey or need assistance? Send us an email and
              we'll get back to you as soon as possible.
            </p>
            <div className="mt-8">
              <a
                href="mailto:john@ollyposture.com"
                className="inline-flex items-center rounded-md bg-primary-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-gray-900"
              >
                <svg
                  className="-ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Email Us
              </a>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Or email us directly at{' '}
                <a
                  href="mailto:john@ollyposture.com"
                  className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  john@ollyposture.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

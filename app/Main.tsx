import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Gif from '@/data/gif.gif'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Random Exercises To Improve Posture Chrome Extension
          </h1>
          <p className="text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="https://chromewebstore.google.com/detail/random-posture-exercises/cpbkmonhcfbgoaediifolmiagbnenich?hl=en">
              <a className="transform rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700">
                Add to Chrome
              </a>
            </Link>
          </div>
        </div>
        {/* New Landing Page Content */}
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
          <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Random Posture Exercises
          </h2>
          <Image
            unoptimized
            src={Gif}
            alt="Posture Exercises"
            width={20}
            height={40}
            className="mt-4 w-1/2"
          />
          <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-400">
            Enhance your posture and well-being with simple, effective exercises.
          </p>
          <p className="text-md mt-2 text-center text-gray-500 dark:text-gray-400">
            Say goodbye to neck and back pain with our easy-to-follow movements.
          </p>
          <div className="mt-8">
            <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
              Benefits of Posture Exercises
            </h3>
            <ul className="mt-4 list-inside list-disc text-gray-600 dark:text-gray-400">
              <li>Improves spinal alignment</li>
              <li>Reduces neck and back pain</li>
              <li>Enhances overall body balance</li>
              <li>Boosts confidence and mood</li>
              <li>Increases energy levels</li>
            </ul>
          </div>
          <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} {siteMetadata.author}. All rights reserved.
            </p>
          </footer>
        </div>
        {/* End of New Landing Page Content */}
      </div>
    </>
  )
}

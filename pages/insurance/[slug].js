import { getPoliciesSlugs, getPolicy } from '../../lib/data'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/solid'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

// export const getStaticPaths = async () => {
//   const slugRes = await getPoliciesSlugs()
//   const slugs = slugRes.policies
//
//   return {
//     paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
//     fallback: false,
//   }
// }
//
// export const getStaticProps = async ({ params }) => {
//   const policy = await getPolicy(params.slug)
//
//   return {
//     props: {
//       policy: policy.policies[0],
//     },
//   }
// }

export default function PolicyPage({
  frontmatter: { title, image, link, whatIsIt, howItWorks, subheading },
}) {
  return (
    <Layout title={`WIG | ${title}`}>
      <div className='bg-blue-200 lg:relative'>
        <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
              <span className='block xl:inline'>{title}</span>
            </h1>
            <p className='my-3 max-w-md mx-auto text-lg text-gray-700 sm:text-xl md:mt-5 md:max-w-3xl'>
              {subheading}
            </p>

            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                {link === '/estimate' ? (
                  <Link href={link}>
                    <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'>
                      Get a Quote.{' '}
                    </a>
                  </Link>
                ) : (
                  <a
                    href='tel:832-930-3827'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'
                    target='_blank'
                    rel='noreferrer'>
                    No Health Questions Asked.{' '}
                    <PhoneIcon
                      className='ml-1 mr-2 h-6 w-6'
                      aria-hidden='true'
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 w-full h-full object-cover'
            src={image}
            alt={title}
          />
        </div>
      </div>

      <div className='py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
        <div className='max-w-max lg:max-w-7xl mx-auto'>
          <div className='relative z-10 mb-8 md:mb-2 md:px-6'>
            <div className='text-base max-w-prose lg:max-w-none'>
              <h2 className='leading-6 text-blue-600 font-semibold tracking-wide uppercase'>
                About
              </h2>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                {title}
              </p>
            </div>
          </div>
          <div className='relative'>
            <svg
              className='hidden md:block absolute top-0 right-0 -mt-20 -mr-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'>
              <defs>
                <pattern
                  id='95e8f2de-6d30-4b7e-8159-f791729db21b'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'>
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#95e8f2de-6d30-4b7e-8159-f791729db21b)'
              />
            </svg>
            <svg
              className='hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'>
              <defs>
                <pattern
                  id='7a00fe67-0343-4a3c-8e81-c145097a3ce0'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'>
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)'
              />
            </svg>
            <div className='relative md:bg-white md:p-6'>
              <div className='lg:grid lg:grid-cols-1 lg:gap-6'>
                <div className='prose prose-blue prose-lg text-gray-500 lg:max-w-none'>
                  <div className='text-base max-w-prose lg:max-w-none'>
                    <h2 className='leading-6 text-blue-600 font-semibold tracking-wide uppercase'></h2>
                    <p className='mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900'>
                      What is {title}?
                    </p>
                  </div>
                  <p>{whatIsIt}</p>
                  <div className='text-base max-w-prose lg:max-w-none'>
                    <h2 className='leading-6 text-blue-600 font-semibold tracking-wide uppercase'></h2>
                    <p className='mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900'>
                      How does {title} work?
                    </p>
                  </div>
                  <p>{howItWorks}</p>
                </div>
              </div>
              <div className='mt-8 inline-flex rounded-md shadow'>
                <Link href='/contact-us'>
                  <a className='flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className='mt-8 inline-flex rounded-md shadow ml-4'>
                <a
                  href='tel:832-930-3827'
                  target='_blank'
                  rel='noreferrer'
                  className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50'>
                  <PhoneIcon
                    className='-ml-0.5 mr-2 h-4 w-4'
                    aria-hidden='true'
                  />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('programs'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('programs', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}

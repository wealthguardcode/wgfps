import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Header'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <ToastContainer />
      <Header />

      <main>{children}</main>

      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'WIG | Affordable Life Insurance',
  keywords:
    'WealthGuard, WIG, Insurance, Life Insurance, Insurance Quotes, Small Business Insurance',
  description: 'WealthGuard Life Insurance, get an instant quote today!.',
}

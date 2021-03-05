import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeaderSection from '../components/HeaderSection'
import BestSellerSection from '../components/BestSellerSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
        <HeaderSection />
        <BestSellerSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}

import '../styles/globals.css'
import 'swiper/css'
import Layout from '../components/layouts/main'
import Fonts from '../components/font'

function Website({ Component, pageProps, router }) {
  return (
    <>
      <Fonts />
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  )
}

export default Website

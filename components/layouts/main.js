
import Head from 'next/head'

function Main({ children, router }) {
  return (
    <main>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Prolab - Product Landing Page</title>
      </Head>

      {children}
    </main>
  )
}

export default Main
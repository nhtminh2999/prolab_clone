import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className='scroll-smooth'>
        <Head>
          <link rel='icon' href='/favicon.png'></link>
          <link href="https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/4cac1a6/css/all.css" rel="stylesheet"
            type="text/css" referrerPolicy="no-referrer" />
        </Head>
        <body>
          <Main />
          <div id='prolab-portal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}
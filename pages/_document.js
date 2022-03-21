import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className='scroll-smooth'>
        <Head>
          <link rel='icon' href='/favicon.png'></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossOrigin="anonymous" referrerPolicy="no-referrer" />
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
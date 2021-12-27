import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="charset" content="UTF-8" />
          <meta
            name="description"
            content="Space Tourism Website challenge from frontendMentor.io"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

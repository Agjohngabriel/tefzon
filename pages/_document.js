/* eslint-disable @next/next/no-sync-scripts */
//_document.js located under the pages directory

import Document, { Html, Head, Main, NextScript } from 'next/document';

class OverriddenDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script type="text/javascript" src="https://widgets.sportmonks.com/js/app.js"></script>
      </Html>
    );
  }
}

export default OverriddenDocument;
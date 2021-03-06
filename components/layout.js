import Head from "next/head";
import Header from "./header";
import theme from "./style/theme";

export default ({ children, title }) =>
  <div>
    <Head>
      <title>{`Hexacta - ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/static/favicon.png" />
    </Head>

    <Header />

    {children}

    <style jsx global>
      {`
				* {
					margin: 0;
					padding: 0;
				}

        a {
          text-decoration: none;
          color: inherit;
        }

        html {
          background: ${theme.lightBackgroundColor};
					color: ${theme.darkPrimaryColor};          
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        }

        .square:before, .rectangle:before, .landscape:before, .ratio:before {
          content: "";
          float: left;
        }

        .square:after, .rectangle:after, .landscape:after, .ratio:after {
          content: "";
          display: table;
          clear: both;
        }

        .square:before {
          padding-bottom: 100%;
        }

        .preview:before {
          padding-bottom: 75%;
        }

        .rectangle:before {
          padding-bottom: 130%;
        }

        .landscape:before {
          padding-bottom: 56%;
        }
				`}
    </style>
  </div>;

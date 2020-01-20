// prettier-ignore
import * as React from "react";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "./Layaout/Navigation";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  subject?: string;
  author?: string;
  copyright?: string;
  index?: string;
  og_url?: string;
  og_title?: string;
  og_description?: string;
  og_locale?: string;
  og_site_name?: string;
  og_type?: string;
  og_image?: string;
  og_image_url?: string;
  og_image_secure_url?: string;
  og_image_type?: string;
  og_image_width?: string;
  og_image_height?: string;
  og_video?: string;
  og_video_url?: string;
  og_video_secure_url?: string;
  og_video_type?: string;
  og_video_width?: string;
  og_video_height?: string;
};

const Container = styled("div")``;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
  description,
  keywords,
  subject,
  author,
  copyright,
  index,
  og_url,
  og_title,
  og_description,
  og_locale,
  og_site_name,
  og_type,
  og_image,
  og_image_url,
  og_image_secure_url,
  og_image_type,
  og_image_width,
  og_image_height,
  og_video,
  og_video_url,
  og_video_secure_url,
  og_video_type,
  og_video_width,
  og_video_height
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="X-UA-Compatible" content="IE=8; IE=9; IE=Edge" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      {description ? <meta name="description" content={description} /> : ""}
      {subject ? <meta name="subject" content={subject} /> : ""}
      {keywords ? <meta name="keywords" content={keywords} /> : ""}
      {author ? <meta name="author" content={author} /> : ""}
      {copyright ? <meta name="copyright" content={copyright} /> : ""}
      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="expires" content="43200" />
      {index ? <meta name="robots" content={index} /> : ""}
      <meta name="revisit-after" content="7 days" />
      <meta name="google" content="nositelinkssearchbox" />

      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href="https://localhost:3000/" />

      {/* Open Graph */}
      {og_url ? <meta property="og:url" content={og_url} /> : ""}
      {og_title ? <meta property="og:title" content={og_title} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_description ? <meta property="og:description" content={og_description} /> : ""}
      {og_locale ? <meta property="og:locale" content={og_locale} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_site_name ? <meta property="og:site_name" content={og_site_name} /> : ""}
      {og_type ? <meta property="og:type" content={og_type} /> : ""}
      <meta property="fb:app_id" content="" />

      {/* Open Graph Image */}
      {og_image ? <meta property="og:image" content={og_image} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_image_url ? <meta property="og:image:url" content={og_image_url} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_image_secure_url ? <meta property="og:image:secure_url" content={og_image_secure_url} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_image_type ? <meta property="og:image:type" content={og_image_type} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_image_width ? <meta property="og:image:width" content={og_image_width} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_image_height ? <meta property="og:image:height" content={og_image_height} /> : ""}

      {/* Open Graph Video */}
      {og_video ? <meta property="og:video" content={og_video} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_video_url ? <meta property="og:video:url" content={og_video_url} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_video_secure_url ? <meta property="og:video:secure_url" content={og_video_secure_url} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_video_type ? <meta property="og:video:type" content={og_video_type} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_video_width ? <meta property="og:video:width" content={og_video_width} /> : ""}
      {/* tslint:disable-next-line:prettier */}
      {og_video_height ? <meta property="og:video:height" content={og_video_height} /> : ""}

      {/* Apple */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      {/* prettier-ignore */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      {/* prettier-ignore */}
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      {/* prettier-ignore */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      {/* prettier-ignore */}
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      {/* prettier-ignore */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <header>
      <Navigation />
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </Container>
);

export default Layout;

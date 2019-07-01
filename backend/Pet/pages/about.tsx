import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage: React.FunctionComponent = () => (
  <Layout
    title="About | Next.js + TypeScript Example"
    description="aboutdescription"
    keywords="aboutkeywords"
    subject="aboutsubject"
    author="aboutauthor"
    copyright="aboutcopyright"
    index="aboutindex"
    og_url="aboutogurl"
    og_title="aboutogtitle"
    og_description="aboutogdescription"
    og_locale="aboutoglocale"
    og_site_name="aboutogsite_name"
    og_type="aboutogtype"
    og_image="aboutogimage.jpg"
  >
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;

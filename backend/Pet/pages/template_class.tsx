import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/Layout";
import { CreateUserComponent } from "../generated/apolloComponents";

const Container = styled.div``;

const TemplatePage: React.FunctionComponent = () => (
  <Layout
    title="Template"
    description="templatedescription"
    keywords="templatekeywords"
    subject="templatesubject"
    author="templateauthor"
    copyright="templatecopyright"
    index="templateindex"
    og_url="templateogurl"
    og_title="templateogtitle"
    og_description="templateogdescription"
    og_locale="templateoglocale"
    og_site_name="templateogsite_name"
    og_type="templateogtype"
    og_image="templateogimage.jpg"
  >
    <h1>About</h1>
    <Container>
      <p>This is a templateclass page</p>
    </Container>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default TemplatePage;

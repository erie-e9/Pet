import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/main.scss";
import styled from "styled-components";
import { LoginComponent } from "../generated/apolloComponents";

const H1Text = styled.h1`
  color: #4c4c4c;
  font-family: "Lucida Grande", Helvetica, Arial, sans-serif;
`;

const ButtonLogin = styled.button`
  background: #85144b;
  border-radius: 3px;
  border: 2px solid #85144b;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-family: "Arial", sans-serif;
  text-decoration: none;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

// const IndexPage: NextPage = () => {
const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout
      title="Home | Next.js + TypeScript Example"
      description="homedescription"
      keywords="homekeywords"
      subject="homesubject"
      author="homeauthor"
      copyright="homecopyright"
      index="homeindex"
      og_url="homeogurl"
      og_title="homeogtitle"
      og_description="homeogdescription"
      og_locale="homeoglocale"
      og_site_name="homeogsite_name"
      og_type="homeogtype"
      og_image="homeogimage.jpg"
    >
      <H1Text>Hola pal que lee 👋🚀👍👽</H1Text>
      <LoginComponent>
        {login => (
          <ButtonLogin
            onClick={async () => {
              const response = await login({
                variables: {
                  uemail: "eric@gmail.com",
                  upassword: "password123"
                }
              });
              console.log("ewe", response);
            }}
          >
            Call login mutation ewe
          </ButtonLogin>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default IndexPage;

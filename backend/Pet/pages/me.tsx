import React from "react";
import Layout from "../components/Layout";
import { MeComponent } from "../generated/apolloComponents";
import styled from "styled-components";

const H1Text = styled.h1`
  color: #4c4c4c;
  font-family: "Lucida Grande", Helvetica, Arial, sans-serif;
`;

const PText = styled.p`
  color: #4c4c4c;
  font-size: 16px;
  font-family: "Lucida Grande", Helvetica, Arial, sans-serif;
`;

export default () => {
  return (
    <Layout
      title="Me | Profile"
      description="medescription"
      keywords="mekeywords"
      subject="mesubject"
      author="meauthor"
      copyright="mecopyright"
      index="meindex"
      og_url="meogurl"
      og_title="meogtitle"
      og_description="meogdescription"
      og_locale="meoglocale"
      og_site_name="meogsite_name"
      og_type="meogtype"
      og_image="meogimage.jpg"
    >
      <MeComponent>
        {({ data }: any) => (
          <div>
            {/* {console.log("[data]: ", data)} */}
            <H1Text>
              Bienvenido papi{" "}
              {data || data !== "undefined"
                ? `${data.me.ufirstname} ${data.me.ulastname}`
                : "Loading"}
            </H1Text>
            <PText>Username: {data ? data.me.uusername : ""}</PText>
            <PText>Phone: {data ? data.me.uphone : ""}</PText>
            <PText>Cellphone: {data ? data.me.ucellphone : ""}</PText>
            <PText>Email: {data ? data.me.uemail : ""}</PText>
            <PText>Avatar: {data ? data.me.uavatar : ""}</PText>
            <PText>Ranking: {data ? data.me.uranking : ""}</PText>
            <PText>
              Current occupation: {data ? data.me.ucurrentoccupation : ""}
            </PText>
          </div>
        )}
      </MeComponent>
    </Layout>
  );
};

import * as React from "react";
import Layout from "../components/Layout";
import { MeComponent } from "../generated/apolloComponents";
import styled from "styled-components";
import Opps from "./oops"

const H1Text = styled.h1`
  color: #4c4c4c;
  font-family: "Lucida Grande", Helvetica, Arial, sans-serif;
`;

const PText = styled.p`
  color: #4c4c4c;
  font-size: 16px;
  font-family: "Lucida Grande", Helvetica, Arial, sans-serif;
`;

// tslint:disable-next-line:prettier
class Me extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      data: {
        me: null
      }
    };
  }

  // tslint:disable-next-line: no-empty
  componentDidMount() {}

  render() {
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
          {({ loading, error, data, refetch, networkStatus }: any) => {
            if (networkStatus === 4) return "Refetching!";
            if (loading) return "Loading..."; // ? Loading Component
            // if (error) return `[Error]: ${error.message}`;
            if (error) return <Opps />;
            // console.log("[Data:", data);
            return (
              <div>
                {/* tslint:disable-next-line:prettier */}
                <H1Text>{data ? data.me.ufirstname : ""} {data ? data.me.ulastname : ""}</H1Text>
                <PText>Username: {data ? data.me.uusername : ""}</PText>
                <PText>Phone: {data ? data.me.uphone : ""}</PText>
                <PText>Cellphone: {data ? data.me.ucellphone : ""}</PText>
                <PText>Email: {data ? data.me.uemail : ""}</PText>
                <PText>Avatar: {data ? data.me.uavatar : ""}</PText>
                <PText>Ranking: {data ? data.me.uranking : ""}</PText>
                {/* tslint:disable-next-line:prettier */}
                <PText>Current occupation: {data ? data.me.ucurrentoccupation : ""}</PText>
                <button onClick={() => refetch()}>Refetch!</button>
              </div>
            );
          }}
        </MeComponent>
      </Layout>
    );
  }
}

export default Me;

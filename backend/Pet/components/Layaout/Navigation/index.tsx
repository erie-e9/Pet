import * as React from "react";
// import { MeComponent } from "../../../generated/apolloComponents";
import StyledLink from "./Link";
// import AsyncRoute from "../../AsyncRoute";

const Navigation: React.FunctionComponent = () => (
  <nav>
    <StyledLink href="/" title="Home" /> |{" "}
    <StyledLink href="/about" title="About" /> |{" "}
    <StyledLink href="/initial-props" title="With Initial Props" /> |{" "}
    <StyledLink href="/signup" title="Sign up" /> |{" "}
    <StyledLink href="/login" title="Login" /> |{" "}
    <StyledLink href="/forgot-password" title="Forgot password" /> |{" "}
    {/* tslint:disable-next-line:prettier */}
    {/* Logged links */}
    <StyledLink href="/change-password" title="Change password" /> |{" "}
    <StyledLink href="/me" title="Me" prefetch={true} /> |{" "}
    {/*change-password
    <MeComponent>
      {({ data, loading }: any) => {
        if (!data || !loading || data.me) {
          return null;
        }
        return (
          <Link href="/logout">
            <StyledLink>Log out</StyledLink>
          </Link>
        );
      }}
    </MeComponent> */}
  </nav>
);

export default Navigation;

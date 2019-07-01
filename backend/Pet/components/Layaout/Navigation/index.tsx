import * as React from "react";
import Link from "next/link";
import { MeComponent } from "../../../generated/apolloComponents";
import styled from "styled-components";

const StyledLink = styled.a`
  color: #85144b;
  font-size: 16px;
  font-family: Arial, sans-serif;
  cursor: pointer;
`;

const Navigation: React.FunctionComponent = () => (
  <nav>
    <Link href="/">
      <StyledLink>Home</StyledLink>
    </Link>{" "}
    |{" "}
    <Link href="/about">
      <StyledLink>About</StyledLink>
    </Link>{" "}
    |{" "}
    <Link href="/initial-props">
      <StyledLink>With Initial Props</StyledLink>
    </Link>{" "}
    |{" "}
    <Link href="/signup">
      <StyledLink>Sign in</StyledLink>
    </Link>{" "}
    |{" "}
    <Link href="/login">
      <StyledLink>Login</StyledLink>
    </Link>{" "}
    |{" "}
    <Link as="/forgot-password" href="/forgot-password">
      <StyledLink>Forgot Password</StyledLink>
    </Link>{" "}
    |{" "}
    {/* <Link href="/me">
      <StyledLink>Me</StyledLink>
    </Link>{" "}
    |{" "}
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

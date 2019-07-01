import React from "react";
import { Formik, Field } from "formik";
import Layout from "../components/Layout";
import { InputField } from "../commons/formControls/Input/InputField";
import { LoginComponent, MeQuery } from "../generated/apolloComponents";
import Router from "next/router";
import { meQuery } from "../graphql/user/queries/me";
import styled from "styled-components";

const ButtonLogin = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
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

export default () => {
  return (
    <Layout
      title="Login | Next.js + TypeScript Example"
      description="login page">
      <h2>Register now</h2>
      <LoginComponent>
        {login => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              try {
                const response = await login({
                  variables: data,
                  update: (cache, { data }) => {
                    // @ts-ignore
                    if (response && response.data && !response.data.loginUser) {
                      return;
                    }
                    // ! ewe
                    // cache.writeQuery<MeQuery>({
                    //   query: meQuery,
                    //   data: {
                    //     __typename: "Query",
                    //     me: response.data.loginUser
                    //   }
                    // });
                  }
                });
                // console.log("ewe: ", response);
                // @ts-ignore
                localStorage.setItem("token", response.data.loginUser.token);
                // Router.push('/')
              } catch (error) {
                // tslint:disable-next-line:prettier
                let ewe: any = error.graphQLErrors[0].extensions;
                const errors: { [key: string]: string } = {};
                Object.keys(ewe.exception).map((key: any) => {
                  errors[key] = ewe.exception[key];
                  return errors;
                });
                // console.log(errors);
                setErrors(errors);
              }
            }}
            initialValues={{
              uemail: "eric@gmail.com",
              upassword: "password123"
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="uemail">Email:</label>
                <Field
                  name="uemail"
                  placeholder="Email"
                  component={InputField}
                  id="uemail"
                />
                <label htmlFor="upassword">Password:</label>
                <Field
                  name="upassword"
                  placeholder="Password"
                  component={InputField}
                  id="upassword"
                />
                <ButtonLogin type="submit">submit</ButtonLogin>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};

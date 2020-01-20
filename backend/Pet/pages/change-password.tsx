import React from "react";
import { Formik, Field } from "formik";
import Layout from "../components/Layout";
import { InputField } from "../commons/formControls/Input/InputField";
import { LoginComponent } from "../generated/apolloComponents";
import Router from "next/router";
import { NextPageContext } from "next";

// @ts-ignore
// const ChangePassword = ({ token }: { token: string }) => {
const ChangePassword = () => {
  return (
    <Layout
      title="Change password | Next.js + TypeScript Example"
      description="change password page"
    >
      <h2>Forgot password</h2>
      <LoginComponent>
        {changePassword => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async data => {
              console.log("data we", data);
              const response: any = await changePassword({
                // variables: {
                //     data: {
                //         upassword: data.upassword,
                //         token
                //     }
                // }
              })
                // @ts-ignore
                .catch(error => console.log(error))
                .then(() => console.log("response", response))
                .then(() => Router.push("/"));
            }}
            initialValues={{
              upassword: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="upassword">Password:</label>
                <Field
                  name="upassword"
                  placeholder="Password"
                  component={InputField}
                  id="upassword"
                />
                <button type="submit">Change password</button>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};

ChangePassword.getInitialProps = ({
  query: { token }
}: NextPageContext<{ token: string }>) => {
  return {
    token
  };
};

export default ChangePassword;

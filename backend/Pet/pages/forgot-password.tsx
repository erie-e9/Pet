import React from "react";
import { Formik, Field } from "formik";
import Layout from "../components/Layout";
import { InputField } from "../commons/formControls/Input/InputField";
import { LoginComponent } from "../generated/apolloComponents";

export default () => {
  return (
    <Layout
      title="Forgot password | Next.js + TypeScript Example"
      description="forgot password page"
    >
      <h2>Forgot password</h2>
      <LoginComponent>
        {forgotPassword => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              try {
                const response = await forgotPassword({
                  variables: data
                });
                console.log("ewe: ", response);
              } catch (err) {
                let ewe: any =
                  err.graphQLErrors[0].extensions.exception.stacktrace;
                setErrors({
                  uemail: ewe[0] ? ewe[0] : ""
                });
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
                <button type="submit">Send email</button>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};

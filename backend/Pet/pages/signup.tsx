import React from "react";
import { Formik, Field } from "formik";
import Layout from "../components/Layout";
import { InputField } from "../commons/formControls/Input/InputField";
import { CreateUserComponent } from "../generated/apolloComponents";
import Router from "next/router";
import styled from "styled-components";

const ButtonSubmit = styled.button`
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
      title="Register | Next.js + TypeScript Example"
      description="register page"
    >
      <h2>Register now</h2>
      <CreateUserComponent>
        {signup => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              // tslint:disable-next-line:radix
              const cero: any = 0;
              if (!data.uranking) {
                data.uranking = cero;
              } else if (data.uranking === cero.toString()) {
                data.uranking = cero;
              }
              try {
                console.log("data we: ", data);
                const response = await signup({
                  variables: data
                });

                Router.push("/check-email");
              } catch (error) {
                // tslint:disable-next-line:prettier
                let ewe: any = error.graphQLErrors[0].extensions.exception;
                console.log("ewe: ", ewe.errors);
                let errors: { [key: string]: string } = {};
                if (Object.keys(ewe.errors)) {
                  Object.keys(ewe.errors).map((key: any) => {
                    errors[ewe.errors[key].path] = ewe.errors[key].message;

                    return errors;
                  });
                }
                // console.log(errors);
                setErrors(errors);
              }
            }}
            initialValues={{
              uusername: "JarnoLeppala",
              uphone: "618-109-2045",
              ucellphone: "618-109-2145",
              uemail: "eric@gmail.com",
              upassword: "password123",
              uavatar: "eric.jpg",
              ufirstname: "Eric",
              ulastname: "Torres",
              ubirtdate: "27/04/1992",
              ugender: "male",
              ucountry: "México",
              ustate: "Durango",
              ucity: "Durango",
              ustreet: "Bayacora",
              uzip: 14000,
              ugeolocation: "pos aqui we XD",
              uemailverified: "verified",
              uactiveaccount: "active",
              ucurrentoccupation: "worker",
              uranking: 3,
              udateadmission: "23/03/2017",
              ulastlogin: "23/03/2017"
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="uusername">Username:</label>
                <Field
                  name="uusername"
                  placeholder="Username"
                  component={InputField}
                  id="uusername"
                />
                <label htmlFor="uphone">Phone:</label>
                <Field
                  name="uphone"
                  placeholder="Phone"
                  component={InputField}
                  id="uphone"
                />
                <label htmlFor="ucellphone">Cellphone:</label>
                <Field
                  name="ucellphone"
                  placeholder="Cellphone"
                  component={InputField}
                  id="ucellphone"
                />
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
                <label htmlFor="uavatar">Avatar:</label>
                <Field
                  name="uavatar"
                  placeholder="Avatar"
                  component={InputField}
                  id="uavatar"
                />
                <label htmlFor="ufirstname">Firstname:</label>
                <Field
                  name="ufirstname"
                  placeholder="Firstname"
                  component={InputField}
                  id="ufirstname"
                />
                <label htmlFor="ulastname">Lastname:</label>
                <Field
                  name="ulastname"
                  placeholder="Lastname"
                  component={InputField}
                  id="ulastname"
                />
                <label htmlFor="ubirtdate">Birtdate:</label>
                <Field
                  name="ubirtdate"
                  placeholder="Birtdate"
                  component={InputField}
                  id="ubirtdate"
                />
                <label htmlFor="ugender">Gender:</label>
                <Field
                  name="ugender"
                  placeholder="Gender"
                  component={InputField}
                  id="ugender"
                />
                <label htmlFor="ucountry">Country:</label>
                <Field
                  name="ucountry"
                  placeholder="Country"
                  component={InputField}
                  id="ucountry"
                />
                <label htmlFor="ustate">State:</label>
                <Field
                  name="ustate"
                  placeholder="State"
                  component={InputField}
                  id="ustate"
                />
                <label htmlFor="ucity">City:</label>
                <Field
                  name="ucity"
                  placeholder="City"
                  component={InputField}
                  id="ucity"
                />
                <label htmlFor="ustreet">Street:</label>
                <Field
                  name="ustreet"
                  placeholder="Street"
                  component={InputField}
                  id="ustreet"
                />
                <label htmlFor="uzip">Zip:</label>
                <Field
                  name="uzip"
                  placeholder="Zip"
                  component={InputField}
                  id="uzip"
                />
                <label htmlFor="ugeolocation">Geolocation:</label>
                <Field
                  name="ugeolocation"
                  placeholder="Geolocation"
                  component={InputField}
                  id="ugeolocation"
                />
                <label htmlFor="uemailverified">Emailverified:</label>
                <Field
                  name="uemailverified"
                  placeholder="Emailverified"
                  component={InputField}
                  id="uemailverified"
                />
                <label htmlFor="uactiveaccount">Activeaccount:</label>
                <Field
                  name="uactiveaccount"
                  placeholder="Activeaccount"
                  component={InputField}
                  id="uactiveaccount"
                />
                <label htmlFor="ucurrentoccupation">Currentoccupation:</label>
                <Field
                  name="ucurrentoccupation"
                  placeholder="Currentoccupation"
                  component={InputField}
                  id="ucurrentoccupation"
                />
                <label htmlFor="uranking">Ranking:</label>
                <Field
                  name="uranking"
                  placeholder="Ranking"
                  component={InputField}
                  id="uranking"
                />
                <label htmlFor="udateadmission">Dateadmission:</label>
                <Field
                  name="udateadmission"
                  placeholder="Dateadmission"
                  component={InputField}
                  id="udateadmission"
                />
                <label htmlFor="ulastlogin">Lastlogin:</label>
                <Field
                  name="ulastlogin"
                  placeholder="Lastlogin"
                  component={InputField}
                  id="ulastlogin"
                />
                {/* <button type="submit">submit</button> */}
                <ButtonSubmit type="submit" tabIndex={1}>
                  Submit 🚀
                </ButtonSubmit>
              </form>
            )}
          </Formik>
        )}
      </CreateUserComponent>
    </Layout>
  );
};

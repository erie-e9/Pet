import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as React from "react";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Auth = {
  __typename?: "Auth";
  token: Scalars["String"];
};

export type Event = {
  __typename?: "Event";
  _id: Scalars["ID"];
  evname: Scalars["String"];
  evdescription?: Maybe<Scalars["String"]>;
  evkeywords: Scalars["String"];
  evubication: Scalars["String"];
  evgeolocation: Scalars["String"];
  evdatestart: Scalars["String"];
  evdatefinish?: Maybe<Scalars["String"]>;
  evtype: Scalars["String"];
  evimage: Scalars["String"];
  evvideo: Scalars["String"];
  user: User;
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};

export type Me = {
  __typename?: "Me";
  _id: Scalars["ID"];
  uusername: Scalars["String"];
  uphone?: Maybe<Scalars["String"]>;
  ucellphone: Scalars["String"];
  uemail: Scalars["String"];
  upassword: Scalars["String"];
  uavatar: Scalars["String"];
  ufirstname: Scalars["String"];
  ulastname?: Maybe<Scalars["String"]>;
  ubirtdate: Scalars["String"];
  ugender: Scalars["String"];
  ucountry: Scalars["String"];
  ustate: Scalars["String"];
  ucity: Scalars["String"];
  ustreet: Scalars["String"];
  uzip: Scalars["Int"];
  ugeolocation: Scalars["String"];
  uemailverified: Scalars["String"];
  uactiveaccount: Scalars["String"];
  ucurrentoccupation: Scalars["String"];
  uranking: Scalars["Int"];
  udateadmission: Scalars["String"];
  ulastlogin: Scalars["String"];
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};

export type Mutation = {
  __typename?: "Mutation";
  createEvent?: Maybe<Event>;
  updateEvent?: Maybe<Event>;
  deleteEvent?: Maybe<Status>;
  createPage?: Maybe<Page>;
  updatePage?: Maybe<Page>;
  deletePage?: Maybe<Page>;
  createPet?: Maybe<Pet>;
  updatePet?: Maybe<Pet>;
  deletePet?: Maybe<Status>;
  createPost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deletePost?: Maybe<Status>;
  createUser?: Maybe<Auth>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  loginUser?: Maybe<Auth>;
};

export type MutationCreateEventArgs = {
  evname: Scalars["String"];
  evdescription?: Maybe<Scalars["String"]>;
  evkeywords: Scalars["String"];
  evubication: Scalars["String"];
  evgeolocation: Scalars["String"];
  evdatestart: Scalars["String"];
  evdatefinish?: Maybe<Scalars["String"]>;
  evtype: Scalars["String"];
  evimage: Scalars["String"];
  evvideo: Scalars["String"];
};

export type MutationUpdateEventArgs = {
  _id: Scalars["ID"];
  evname: Scalars["String"];
  evdescription?: Maybe<Scalars["String"]>;
  evkeywords: Scalars["String"];
  evubication: Scalars["String"];
  evgeolocation: Scalars["String"];
  evdatestart: Scalars["String"];
  evdatefinish?: Maybe<Scalars["String"]>;
  evtype: Scalars["String"];
  evimage: Scalars["String"];
  evvideo: Scalars["String"];
};

export type MutationDeleteEventArgs = {
  _id: Scalars["ID"];
};

export type MutationCreatePageArgs = {
  pname: Scalars["String"];
  pimage: Scalars["String"];
  pdescription: Scalars["String"];
  pstartdate: Scalars["String"];
  ptype: Scalars["String"];
  purl?: Maybe<Scalars["String"]>;
  pcategory: Scalars["String"];
  pphone: Scalars["String"];
  pcellphone?: Maybe<Scalars["String"]>;
  pemail: Scalars["String"];
  pworkinghours?: Maybe<Scalars["String"]>;
  pcountry?: Maybe<Scalars["String"]>;
  pstate?: Maybe<Scalars["String"]>;
  pcity?: Maybe<Scalars["String"]>;
  pstreet?: Maybe<Scalars["String"]>;
  pzip?: Maybe<Scalars["Int"]>;
  pgeolocation: Scalars["String"];
};

export type MutationUpdatePageArgs = {
  _id: Scalars["ID"];
  pname: Scalars["String"];
  pimage: Scalars["String"];
  pdescription: Scalars["String"];
  pstartdate: Scalars["String"];
  ptype: Scalars["String"];
  purl?: Maybe<Scalars["String"]>;
  pcategory: Scalars["String"];
  pphone: Scalars["String"];
  pcellphone?: Maybe<Scalars["String"]>;
  pemail: Scalars["String"];
  pworkinghours?: Maybe<Scalars["String"]>;
  pcountry?: Maybe<Scalars["String"]>;
  pstate?: Maybe<Scalars["String"]>;
  pcity?: Maybe<Scalars["String"]>;
  pstreet?: Maybe<Scalars["String"]>;
  pzip?: Maybe<Scalars["Int"]>;
  pgeolocation: Scalars["String"];
};

export type MutationDeletePageArgs = {
  _id: Scalars["ID"];
};

export type MutationCreatePetArgs = {
  pechipcode: Scalars["String"];
  pename: Scalars["String"];
  peage: Scalars["Int"];
  peavatar: Scalars["String"];
  pegender: Scalars["String"];
  pespecies: Scalars["String"];
  pegroup: Scalars["String"];
  pebirthdate: Scalars["String"];
  pecurrentsituation: Scalars["String"];
  pebreed: Scalars["String"];
  pefurcolor: Scalars["String"];
  pesterilized: Scalars["Boolean"];
  peneutered: Scalars["Boolean"];
  pedewormed: Scalars["Boolean"];
  pepedrigree: Scalars["Boolean"];
  peprovenance: Scalars["String"];
  peheight: Scalars["Int"];
  peweight: Scalars["Int"];
  pemissing: Scalars["Boolean"];
  pereward: Scalars["Boolean"];
  pedeceased: Scalars["Boolean"];
  pegeolocation: Scalars["String"];
};

export type MutationUpdatePetArgs = {
  _id: Scalars["ID"];
  pechipcode: Scalars["String"];
  pename: Scalars["String"];
  peage: Scalars["Int"];
  peavatar: Scalars["String"];
  pegender: Scalars["String"];
  pespecies: Scalars["String"];
  pegroup: Scalars["String"];
  pebirthdate: Scalars["String"];
  pecurrentsituation: Scalars["String"];
  pebreed: Scalars["String"];
  pefurcolor: Scalars["String"];
  pesterilized: Scalars["Boolean"];
  peneutered: Scalars["Boolean"];
  pedewormed: Scalars["Boolean"];
  pepedrigree: Scalars["Boolean"];
  peprovenance: Scalars["String"];
  peheight: Scalars["Int"];
  peweight: Scalars["Int"];
  pemissing: Scalars["Boolean"];
  pereward: Scalars["Boolean"];
  pedeceased: Scalars["Boolean"];
  pegeolocation: Scalars["String"];
};

export type MutationDeletePetArgs = {
  _id: Scalars["ID"];
};

export type MutationCreatePostArgs = {
  ptext?: Maybe<Scalars["String"]>;
  pimage?: Maybe<Scalars["String"]>;
};

export type MutationUpdatePostArgs = {
  _id: Scalars["ID"];
  ptext?: Maybe<Scalars["String"]>;
  pimage?: Maybe<Scalars["String"]>;
};

export type MutationDeletePostArgs = {
  _id: Scalars["ID"];
};

export type MutationCreateUserArgs = {
  uusername: Scalars["String"];
  uphone: Scalars["String"];
  ucellphone?: Maybe<Scalars["String"]>;
  uemail: Scalars["String"];
  upassword: Scalars["String"];
  uavatar: Scalars["String"];
  ufirstname: Scalars["String"];
  ulastname: Scalars["String"];
  ubirtdate: Scalars["String"];
  ugender: Scalars["String"];
  ucountry: Scalars["String"];
  ustate: Scalars["String"];
  ucity: Scalars["String"];
  ustreet: Scalars["String"];
  uzip: Scalars["Int"];
  ugeolocation: Scalars["String"];
  uemailverified: Scalars["String"];
  uactiveaccount: Scalars["String"];
  ucurrentoccupation: Scalars["String"];
  uranking: Scalars["Int"];
  udateadmission: Scalars["String"];
  ulastlogin: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  _id: Scalars["ID"];
  uusername: Scalars["String"];
  uphone: Scalars["String"];
  ucellphone: Scalars["String"];
  uemail: Scalars["String"];
  upassword: Scalars["String"];
  uavatar: Scalars["String"];
  ufirstname: Scalars["String"];
  ulastname: Scalars["String"];
  ubirtdate: Scalars["String"];
  ugender: Scalars["String"];
  ucountry: Scalars["String"];
  ustate: Scalars["String"];
  ucity: Scalars["String"];
  ustreet: Scalars["String"];
  uzip: Scalars["Int"];
  ugeolocation: Scalars["String"];
  uemailverified: Scalars["String"];
  uactiveaccount: Scalars["String"];
  ucurrentoccupation: Scalars["String"];
  uranking: Scalars["Int"];
  udateadmission: Scalars["String"];
  ulastlogin: Scalars["String"];
};

export type MutationDeleteUserArgs = {
  _id: Scalars["ID"];
};

export type MutationLoginUserArgs = {
  uemail: Scalars["String"];
  upassword: Scalars["String"];
};

export type Page = {
  __typename?: "Page";
  _id: Scalars["ID"];
  pname: Scalars["String"];
  pimage: Scalars["String"];
  pdescription: Scalars["String"];
  pstartdate: Scalars["String"];
  ptype: Scalars["String"];
  purl?: Maybe<Scalars["String"]>;
  pcategory: Scalars["String"];
  pphone: Scalars["String"];
  pcellphone?: Maybe<Scalars["String"]>;
  pemail: Scalars["String"];
  pworkinghours?: Maybe<Scalars["String"]>;
  pcountry?: Maybe<Scalars["String"]>;
  pstate?: Maybe<Scalars["String"]>;
  pcity?: Maybe<Scalars["String"]>;
  pstreet?: Maybe<Scalars["String"]>;
  pzip?: Maybe<Scalars["Int"]>;
  pgeolocation: Scalars["String"];
  user: User;
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};

export type Pet = {
  __typename?: "Pet";
  _id: Scalars["ID"];
  pechipcode: Scalars["String"];
  pename: Scalars["String"];
  peage: Scalars["Int"];
  peavatar: Scalars["String"];
  pegender: Scalars["String"];
  pespecies: Scalars["String"];
  pegroup: Scalars["String"];
  pebirthdate: Scalars["String"];
  pecurrentsituation: Scalars["String"];
  pebreed: Scalars["String"];
  pefurcolor: Scalars["String"];
  pesterilized: Scalars["Boolean"];
  peneutered: Scalars["Boolean"];
  pedewormed: Scalars["Boolean"];
  pepedrigree: Scalars["Boolean"];
  peprovenance: Scalars["String"];
  peheight: Scalars["Int"];
  peweight: Scalars["Int"];
  pemissing: Scalars["Boolean"];
  pereward: Scalars["Boolean"];
  pedeceased: Scalars["Boolean"];
  pegeolocation: Scalars["String"];
  user: User;
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};

export type Post = {
  __typename?: "Post";
  _id: Scalars["ID"];
  ptext?: Maybe<Scalars["String"]>;
  pimage?: Maybe<Scalars["String"]>;
  user: User;
  pclaps: Scalars["Int"];
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};

export type Query = {
  __typename?: "Query";
  getEvent?: Maybe<Event>;
  getEvents?: Maybe<Array<Maybe<Event>>>;
  getUserEvents?: Maybe<Array<Maybe<Event>>>;
  getPage?: Maybe<Page>;
  getPages?: Maybe<Array<Maybe<Page>>>;
  getUserPages?: Maybe<Array<Maybe<Page>>>;
  getPet?: Maybe<Pet>;
  getPets?: Maybe<Array<Maybe<Pet>>>;
  getUserPets?: Maybe<Array<Maybe<Pet>>>;
  getPost?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getUserPosts?: Maybe<Array<Maybe<Post>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  me?: Maybe<Me>;
};

export type QueryGetEventArgs = {
  _id: Scalars["ID"];
};

export type QueryGetPageArgs = {
  _id: Scalars["ID"];
};

export type QueryGetPetArgs = {
  _id: Scalars["ID"];
};

export type QueryGetPostArgs = {
  _id: Scalars["ID"];
};

export type QueryGetUserArgs = {
  _id: Scalars["ID"];
};

export type Status = {
  __typename?: "Status";
  message: Scalars["String"];
};

export type User = {
  __typename?: "User";
  _id: Scalars["ID"];
  uusername: Scalars["String"];
  uphone?: Maybe<Scalars["String"]>;
  ucellphone: Scalars["String"];
  uemail: Scalars["String"];
  upassword: Scalars["String"];
  uavatar: Scalars["String"];
  ufirstname: Scalars["String"];
  ulastname?: Maybe<Scalars["String"]>;
  ubirtdate: Scalars["String"];
  ugender: Scalars["String"];
  ucountry: Scalars["String"];
  ustate: Scalars["String"];
  ucity: Scalars["String"];
  ustreet: Scalars["String"];
  uzip: Scalars["Int"];
  ugeolocation: Scalars["String"];
  uemailverified: Scalars["String"];
  uactiveaccount: Scalars["String"];
  ucurrentoccupation: Scalars["String"];
  uranking: Scalars["Int"];
  udateadmission: Scalars["String"];
  ulastlogin: Scalars["String"];
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};
export type LoginUserMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginUserMutation = { __typename?: "Mutation" } & {
  loginUser: Maybe<{ __typename?: "Auth" } & Pick<Auth, "token">>;
};

export const LoginUserDocument = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(uemail: $email, upassword: $password) {
      token
    }
  }
`;
export type LoginUserMutationFn = ReactApollo.MutationFn<
  LoginUserMutation,
  LoginUserMutationVariables
>;
export type LoginUserComponentProps = Omit<
  Omit<
    ReactApollo.MutationProps<LoginUserMutation, LoginUserMutationVariables>,
    "mutation"
  >,
  "variables"
> & { variables?: LoginUserMutationVariables };

export const LoginUserComponent = (props: LoginUserComponentProps) => (
  <ReactApollo.Mutation<LoginUserMutation, LoginUserMutationVariables>
    mutation={LoginUserDocument}
    {...props}
  />
);

export type LoginUserProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LoginUserMutation, LoginUserMutationVariables>
> &
  TChildProps;
export function withLoginUser<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    LoginUserMutation,
    LoginUserMutationVariables,
    LoginUserProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    LoginUserMutation,
    LoginUserMutationVariables,
    LoginUserProps<TChildProps>
  >(LoginUserDocument, {
    alias: "withLoginUser",
    ...operationOptions
  });
}

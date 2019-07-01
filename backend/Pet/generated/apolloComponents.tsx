import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as React from "react";
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
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
  user: User;
  evname: Scalars["String"];
  evdescription?: Maybe<Scalars["String"]>;
  evkeywords: Scalars["String"];
  evubication: Scalars["String"];
  evgeolocation: Scalars["String"];
  evdatestart: Scalars["Date"];
  evdatefinish?: Maybe<Scalars["Date"]>;
  evtype: Scalars["String"];
  evimage: Scalars["String"];
  evvideo: Scalars["String"];
  evisenabled: Scalars["Boolean"];
  evregisteredbyuser: Scalars["String"];
  evupdatedbyuser?: Maybe<Scalars["String"]>;
  evdeletedbyuser?: Maybe<Scalars["String"]>;
  evdatedeleted?: Maybe<Scalars["Date"]>;
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
  deletePage?: Maybe<Status>;
  createPet?: Maybe<Pet>;
  updatePet?: Maybe<Pet>;
  deletePet?: Maybe<Status>;
  createPost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deletePost?: Maybe<Status>;
  createUser?: Maybe<Auth>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<Status>;
  loginUser?: Maybe<Auth>;
};

export type MutationCreateEventArgs = {
  evname: Scalars["String"];
  evdescription?: Maybe<Scalars["String"]>;
  evkeywords: Scalars["String"];
  evubication: Scalars["String"];
  evgeolocation: Scalars["String"];
  evdatestart: Scalars["Date"];
  evdatefinish?: Maybe<Scalars["Date"]>;
  evtype: Scalars["String"];
  evimage: Scalars["String"];
  evvideo: Scalars["String"];
  evisenabled: Scalars["Boolean"];
  evregisteredbyuser: Scalars["String"];
  evupdatedbyuser?: Maybe<Scalars["String"]>;
  evdeletedbyuser?: Maybe<Scalars["String"]>;
  evdatedeleted?: Maybe<Scalars["Date"]>;
};

export type MutationUpdateEventArgs = {
  _id: Scalars["ID"];
  evname: Scalars["String"];
  evdescription?: Maybe<Scalars["String"]>;
  evkeywords: Scalars["String"];
  evubication: Scalars["String"];
  evgeolocation: Scalars["String"];
  evdatestart: Scalars["Date"];
  evdatefinish?: Maybe<Scalars["Date"]>;
  evtype: Scalars["String"];
  evimage: Scalars["String"];
  evvideo: Scalars["String"];
  evisenabled: Scalars["Boolean"];
  evregisteredbyuser: Scalars["String"];
  evupdatedbyuser?: Maybe<Scalars["String"]>;
  evdeletedbyuser?: Maybe<Scalars["String"]>;
  evdatedeleted?: Maybe<Scalars["Date"]>;
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
  pclaps: Scalars["Int"];
  pisenabled: Scalars["Boolean"];
  pregisteredbyuser: Scalars["String"];
  pupdatedbyuser?: Maybe<Scalars["String"]>;
  pdeletedbyuser?: Maybe<Scalars["String"]>;
  pdatedeleted?: Maybe<Scalars["Date"]>;
};

export type MutationUpdatePostArgs = {
  _id: Scalars["ID"];
  ptext?: Maybe<Scalars["String"]>;
  pimage?: Maybe<Scalars["String"]>;
  pclaps: Scalars["Int"];
  pisenabled: Scalars["Boolean"];
  pregisteredbyuser: Scalars["String"];
  pupdatedbyuser?: Maybe<Scalars["String"]>;
  pdeletedbyuser?: Maybe<Scalars["String"]>;
  pdatedeleted?: Maybe<Scalars["Date"]>;
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
  user: User;
  ptext?: Maybe<Scalars["String"]>;
  pimage?: Maybe<Scalars["String"]>;
  pclaps: Scalars["Int"];
  pisenabled: Scalars["Boolean"];
  pregisteredbyuser: Scalars["String"];
  pupdatedbyuser?: Maybe<Scalars["String"]>;
  pdeletedbyuser?: Maybe<Scalars["String"]>;
  pdatedeleted?: Maybe<Scalars["Date"]>;
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
export type LoginMutationVariables = {
  uemail: Scalars["String"];
  upassword: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
  loginUser: Maybe<{ __typename?: "Auth" } & Pick<Auth, "token">>;
};

export type CreateUserMutationVariables = {
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

export type CreateUserMutation = { __typename?: "Mutation" } & {
  createUser: Maybe<{ __typename?: "Auth" } & Pick<Auth, "token">>;
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: "Query" } & {
  me: Maybe<
    { __typename?: "Me" } & Pick<
      Me,
      | "_id"
      | "uusername"
      | "uphone"
      | "ucellphone"
      | "uemail"
      | "upassword"
      | "uavatar"
      | "ufirstname"
      | "ulastname"
      | "ubirtdate"
      | "ugender"
      | "ucountry"
      | "ustate"
      | "ucity"
      | "ustreet"
      | "uzip"
      | "ugeolocation"
      | "uemailverified"
      | "uactiveaccount"
      | "ucurrentoccupation"
      | "uranking"
      | "udateadmission"
      | "ulastlogin"
      | "createdAt"
      | "updatedAt"
    >
  >;
};

export const LoginDocument = gql`
  mutation Login($uemail: String!, $upassword: String!) {
    loginUser(uemail: $uemail, upassword: $upassword) {
      token
    }
  }
`;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginMutationVariables
>;
export type LoginComponentProps = Omit<
  ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>,
  "mutation"
>;

export const LoginComponent = (props: LoginComponentProps) => (
  <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
    mutation={LoginDocument}
    {...props}
  />
);

export type LoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginMutationVariables>
> &
  TChildProps;
export function withLogin<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >(LoginDocument, {
    alias: "withLogin",
    ...operationOptions
  });
}
export const CreateUserDocument = gql`
  mutation createUser(
    $uusername: String!
    $uphone: String!
    $ucellphone: String!
    $uemail: String!
    $upassword: String!
    $uavatar: String!
    $ufirstname: String!
    $ulastname: String!
    $ubirtdate: String!
    $ugender: String!
    $ucountry: String!
    $ustate: String!
    $ucity: String!
    $ustreet: String!
    $uzip: Int!
    $ugeolocation: String!
    $uemailverified: String!
    $uactiveaccount: String!
    $ucurrentoccupation: String!
    $uranking: Int!
    $udateadmission: String!
    $ulastlogin: String!
  ) {
    createUser(
      uusername: $uusername
      uphone: $uphone
      ucellphone: $ucellphone
      uemail: $uemail
      upassword: $upassword
      uavatar: $uavatar
      ufirstname: $ufirstname
      ulastname: $ulastname
      ubirtdate: $ubirtdate
      ugender: $ugender
      ucountry: $ucountry
      ustate: $ustate
      ucity: $ucity
      ustreet: $ustreet
      uzip: $uzip
      ugeolocation: $ugeolocation
      uemailverified: $uemailverified
      uactiveaccount: $uactiveaccount
      ucurrentoccupation: $ucurrentoccupation
      uranking: $uranking
      udateadmission: $udateadmission
      ulastlogin: $ulastlogin
    ) {
      token
    }
  }
`;
export type CreateUserMutationFn = ReactApollo.MutationFn<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export type CreateUserComponentProps = Omit<
  ReactApollo.MutationProps<CreateUserMutation, CreateUserMutationVariables>,
  "mutation"
>;

export const CreateUserComponent = (props: CreateUserComponentProps) => (
  <ReactApollo.Mutation<CreateUserMutation, CreateUserMutationVariables>
    mutation={CreateUserDocument}
    {...props}
  />
);

export type CreateUserProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateUserMutation, CreateUserMutationVariables>
> &
  TChildProps;
export function withCreateUser<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreateUserMutation,
    CreateUserMutationVariables,
    CreateUserProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreateUserMutation,
    CreateUserMutationVariables,
    CreateUserProps<TChildProps>
  >(CreateUserDocument, {
    alias: "withCreateUser",
    ...operationOptions
  });
}
export const MeDocument = gql`
  query Me {
    me {
      _id
      uusername
      uphone
      ucellphone
      uemail
      upassword
      uavatar
      ufirstname
      ulastname
      ubirtdate
      ugender
      ucountry
      ustate
      ucity
      ustreet
      uzip
      ugeolocation
      uemailverified
      uactiveaccount
      ucurrentoccupation
      uranking
      udateadmission
      ulastlogin
      createdAt
      updatedAt
    }
  }
`;
export type MeComponentProps = Omit<
  ReactApollo.QueryProps<MeQuery, MeQueryVariables>,
  "query"
>;

export const MeComponent = (props: MeComponentProps) => (
  <ReactApollo.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
);

export type MeProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<MeQuery, MeQueryVariables>
> &
  TChildProps;
export function withMe<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >(MeDocument, {
    alias: "withMe",
    ...operationOptions
  });
}

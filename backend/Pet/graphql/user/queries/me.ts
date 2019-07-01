import { gql } from "apollo-boost";

export const meQuery = gql`
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

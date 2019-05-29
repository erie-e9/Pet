import { gql } from 'apollo-boost'

export const signupMutation = gql`
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
`

// export const signupMutation = gql`
// mutation createUser($data: User!) {
//     createUser(data: $data) {
//       token
//     }
//   }
// `
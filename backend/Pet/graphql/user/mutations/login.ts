import { gql } from 'apollo-boost'

export const loginMutation = gql`
    mutation Login($uemail: String!, $upassword: String!) {
        loginUser(uemail: $uemail, upassword: $upassword) {
            token
        }
    }
`
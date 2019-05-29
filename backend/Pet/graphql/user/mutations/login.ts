import { gql } from 'apollo-boost'

export const loginMutation = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(uemail: $email, upassword: $password) {
            token
        }
    }
`
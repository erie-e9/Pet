export default `
    scalar Date

    type Status {
        message: String!
    }

    type Page {
        _id: ID!
        pname: String!
        pimage: String!
        pdescription: String!
        pstartdate: String!
        purl: String!
        pcategory: String!
        pphone: String!
        pcellphone: String!
        pemail: String!
        pworkinghours: String!
        pcountry: String!
        pstate: String!
        pcity: String!
        pstreet: String!
        pzip: String!
        pgeolocation: String!
    }

    type User {
        _id: ID!
        username: String!
        uphone: String
        ucell: String
        uemail: String
        upassword: String
        uavatar: String
        ufirstname: String
        ulastname: String
        ubirtdate: String
        ugender: String
        ucountry: String
        ustate: String
        ucity: String
        ustreet: String
        uzip: String
        ugeolocation: String
        uemailverified: String
        uactive: String
        uverificationcode: String
        createdAt: Date!
        updatedAt: Date!
    }

    type State {
        _id: ID!
        stext: String!
    }

    type Query {
        getStates: [State]
        getState(_id: ID!): State

        getUsers: [User]
        getUser(_id: ID!): User

        getPages: [Page]
        getPage(_id: ID!): Page 
    }

    type Mutation {
        createState(stext: String!): State
        updateState(_id: ID!, stext: String!): State
        deleteState(_id: ID!): Status

        createUser(
            username: String!
            uphone: String!,
            ucell: String!,
            uemail: String!,
            upassword: String!,
            uavatar: String!,
            ufirstname: String!,
            ulastname: String!,
            ubirtdate: String!,
            ugender: String!,
            ucountry: String!,
            ustate: String!,
            ucity: String!,
            ustreet: String!,
            uzip: String!,
            ugeolocation: String!,
            uemailverified: String!,
            uactive: String!,
            uverificationcode: String!): User
        updateUser(_id: ID!, 
            username: String!
            uphone: String!,
            ucell: String!,
            uemail: String!,
            upassword: String!,
            uavatar: String!,
            ufirstname: String!,
            ulastname: String!,
            ubirtdate: String!,
            ugender: String!,
            ucountry: String!,
            ustate: String!,
            ucity: String!,
            ustreet: String!,
            uzip: String!,
            ugeolocation: String!,
            uemailverified: String!,
            uactive: String!,
            uverificationcode: String!): User
        deleteUser(_id: ID!): User

        createPage(
            pname: String!,
            pimage: String!,
            pdescription: String!,
            pstartdate: String!,
            purl: String!,
            pcategory: String!,
            pphone: String!,
            pcellphone: String!,
            pemail: String!,
            pworkinghours: String!,
            pcountry: String!,
            pstate: String!,
            pcity: String!,
            pstreet: String!,
            pzip: String!,
            pgeolocation: String!): Page
        updatePage(
            _id: ID!,
            pname: String!,
            pimage: String!,
            pdescription: String!,
            pstartdate: String!,
            purl: String!,
            pcategory: String!,
            pphone: String!,
            pcellphone: String!,
            pemail: String!,
            pworkinghours: String!,
            pcountry: String!,
            pstate: String!,
            pcity: String!,
            pstreet: String!,
            pzip: String!,
            pgeolocation: String!): Page
        deletePage(_id: ID!): Page
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;
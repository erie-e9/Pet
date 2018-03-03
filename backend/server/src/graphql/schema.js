export default `
    scalar Date

    type Status {
        message: String!
    }

    type Event {
        _id: ID!
        evname: String!
        evdescription: String
        evkeywords: String!
        evubication: String!
        evgeolocation: String!
        evdatestart: String!
        evdatefinish: String
        evtype: String!
        evimage: String!
        evvideo: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Page {
        _id: ID!
        pname: String!
        pimage: String!
        pdescription: String!
        pstartdate: String!
        ptype: String!
        purl: String
        pcategory: String!
        pphone: String!
        pcellphone: String
        pemail: String!
        pworkinghours: String
        pcountry: String
        pstate: String
        pcity: String
        pstreet: String
        pzip: Int
        pgeolocation: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Pet {
        _id: ID!
        pechipcode: String!
        pename: String!
        peage: Int!
        peavatar: String!
        pegender: String!
        pespecies: String!
        pegroup: String!
        pebirthdate: String!
        pecurrentsituation: String!
        pebreed: String!
        pefurcolor: String!
        pesterilized: Boolean!
        peneutered: Boolean!
        pedewormed: Boolean!
        pepedrigree: Boolean!
        peprovenance: String!
        peheight: Int!
        peweight: Int!
        pemissing: Boolean!
        pereward: Boolean!
        pedeceased: Boolean!
        pegeolocation: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Post {
        _id: ID!
        ptext: String
        pimage: String
        createdAt: Date!
        updatedAt: Date!
    }

    type User {
        _id: ID!
        uusername: String!
        uphone: String
        ucellphone: String!
        uemail: String!
        upassword: String!
        uavatar: String!
        ufirstname: String!
        ulastname: String
        ubirtdate: String!
        ugender: String!
        ucountry: String!
        ustate: String!
        ucity: String!
        ustreet: String!
        uzip: Int!
        ugeolocation: String!
        uemailverified: String!
        uactiveaccount: String!
        ucurrentoccupation: String!
        uranking: Int!
        udateadmission: String!
        ulastlogin: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Query {
        getEvent(_id: ID!): Event
        getEvents: [ Event ]

        getPage(_id: ID!): Page 
        getPages: [ Page ]
        
        getPet(_id: ID!): Pet 
        getPets: [ Pet ]

        getPost(_id: ID!): Post
        getPosts: [ Post ]

        getUser(_id: ID!): User
        getUsers: [ User ]
        }

    type Mutation {
        
        createEvent(evname: String!,
                    evdescription: String,
                    evkeywords: String!,
                    evubication: String!,
                    evgeolocation: String!,
                    evdatestart: String!,
                    evdatefinish: String,
                    evtype: String!,
                    evimage: String!,
                    evvideo: String!): Event
        updateEvent(_id: ID!,
                    evname: String!,
                    evdescription: String,
                    evkeywords: String!,
                    evubication: String!,
                    evgeolocation: String!,
                    evdatestart: String!,
                    evdatefinish: String,
                    evtype: String!,
                    evimage: String!,
                    evvideo: String!): Event
        deleteEvent(_id: ID!): Status

        createPage(pname: String!,
                    pimage: String!,
                    pdescription: String!,
                    pstartdate: String!,
                    ptype: String!,
                    purl: String,
                    pcategory: String!,
                    pphone: String!,
                    pcellphone: String,
                    pemail: String!,
                    pworkinghours: String,
                    pcountry: String,
                    pstate: String,
                    pcity: String,
                    pstreet: String,
                    pzip: Int,
                    pgeolocation: String!): Page
        updatePage(_id: ID!,
                    pname: String!,
                    pimage: String!,
                    pdescription: String!,
                    pstartdate: String!,
                    ptype: String!,
                    purl: String,
                    pcategory: String!,
                    pphone: String!,
                    pcellphone: String,
                    pemail: String!,
                    pworkinghours: String,
                    pcountry: String,
                    pstate: String,
                    pcity: String,
                    pstreet: String,
                    pzip: Int,
                    pgeolocation: String!): Page
        deletePage(_id: ID!): Page

        createPet(pechipcode: String!,
                    pename: String!,
                    peage: Int!,
                    peavatar: String!,
                    pegender: String!,
                    pespecies: String!,
                    pegroup: String!,
                    pebirthdate: String!,
                    pecurrentsituation: String!,
                    pebreed: String!,
                    pefurcolor: String!,
                    pesterilized: Boolean!,
                    peneutered: Boolean!,
                    pedewormed: Boolean!,
                    pepedrigree: Boolean!,
                    peprovenance: String!,
                    peheight: Int!,
                    peweight: Int!,
                    pemissing: Boolean!,
                    pereward: Boolean!,
                    pedeceased: Boolean!,
                    pegeolocation: String!): Pet
        updatePet(_id: ID!,
                    pechipcode: String!,
                    pename: String!,
                    peage: Int!,
                    peavatar: String!,
                    pegender: String!,
                    pespecies: String!,
                    pegroup: String!,
                    pebirthdate: String!,
                    pecurrentsituation: String!,
                    pebreed: String!,
                    pefurcolor: String!,
                    pesterilized: Boolean!,
                    peneutered: Boolean!,
                    pedewormed: Boolean!,
                    pepedrigree: Boolean!,
                    peprovenance: String!,
                    peheight: Int!,
                    peweight: Int!,
                    pemissing: Boolean!,
                    pereward: Boolean!,
                    pedeceased: Boolean!,
                    pegeolocation: String!): Pet
        deletePet(_id: ID!): Status

        createPost(ptext: String,
                    pimage: String): Post
        updatePost(_id: ID!, 
                    ptext: String,
                    pimage: String): Post
        deletePost(_id: ID!): Status

        createUser(uusername: String!
                    uphone: String!,
                    ucellphone: String,
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
                    uzip: Int!,
                    ugeolocation: String!,
                    uemailverified: String!,
                    uactiveaccount: String!,
                    ucurrentoccupation: String!,
                    uranking: Int!,
                    udateadmission: String!,
                    ulastlogin: String!): User
        updateUser(_id: ID!, 
                    uusername: String!
                    uphone: String!,
                    ucellphone: String!,
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
                    uzip: Int!,
                    ugeolocation: String!,
                    uemailverified: String!,
                    uactiveaccount: String!,
                    ucurrentoccupation: String!,
                    uranking: Int!,
                    udateadmission: String!,
                    ulastlogin: String!): User
        deleteUser(_id: ID!): User
        loginUser(uemail: String!, upassword: String!): User

    }

    schema {
        query: Query
        mutation: Mutation
    }
`;
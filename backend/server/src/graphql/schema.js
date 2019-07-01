export default `
    scalar Date

    type Status {
        message: String!
    }

    type Auth {
        token: String!
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

    type Event {
        _id: ID!
        user: User!
        evname: String!
        evdescription: String
        evkeywords: String!
        evubication: String!
        evgeolocation: String!
        evdatestart: Date!
        evdatefinish: Date
        evtype: String!
        evimage: String!
        evvideo: String!
        evisenabled: Boolean!
        evregisteredbyuser: String!
        evupdatedbyuser: String
        evdeletedbyuser: String
        evdatedeleted: Date
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
        user: User!
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
        user: User!
        createdAt: Date!
        updatedAt: Date!
    }

    type Post {
        _id: ID!
        user: User!
        ptext: String
        pimage: String
        pclaps: Int!
        pisenabled: Boolean!
        pregisteredbyuser: String!
        pupdatedbyuser: String
        pdeletedbyuser: String
        pdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Me {
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
        getEvents: [Event]
        getUserEvents: [Event]

        getPage(_id: ID!): Page 
        getPages: [Page]
        getUserPages: [Page]
        
        getPet(_id: ID!): Pet 
        getPets: [Pet]
        getUserPets: [Pet]

        getPost(_id: ID!): Post
        getPosts: [Post]
        getUserPosts: [Post]

        getUser(_id: ID!): User
        getUsers: [User]

        me: Me
        }

    type Mutation {
        createEvent(evname: String!,
            evdescription: String,
            evkeywords: String!,
            evubication: String!,
            evgeolocation: String!,
            evdatestart: Date!,
            evdatefinish: Date,
            evtype: String!,
            evimage: String!,
            evvideo: String!,
            evisenabled: Boolean!,
            evregisteredbyuser: String!,
            evupdatedbyuser: String,
            evdeletedbyuser: String,
            evdatedeleted: Date): Event
        updateEvent(_id: ID!,
            evname: String!,
            evdescription: String,
            evkeywords: String!,
            evubication: String!,
            evgeolocation: String!,
            evdatestart: Date!,
            evdatefinish: Date,
            evtype: String!,
            evimage: String!,
            evvideo: String!,
            evisenabled: Boolean!,
            evregisteredbyuser: String!,
            evupdatedbyuser: String,
            evdeletedbyuser: String,
            evdatedeleted: Date): Event
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
        deletePage(_id: ID!): Status

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
            pimage: String,
            pclaps: Int!,
            pisenabled: Boolean!,
            pregisteredbyuser: String!,
            pupdatedbyuser: String,
            pdeletedbyuser: String,
            pdatedeleted: Date): Post
        updatePost(_id: ID!,
            ptext: String,
            pimage: String,
            pclaps: Int!,
            pisenabled: Boolean!,
            pregisteredbyuser: String!,
            pupdatedbyuser: String,
            pdeletedbyuser: String,
            pdatedeleted: Date): Post
        deletePost(_id: ID!): Status

        createUser(uusername: String!,
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
                    ulastlogin: String!): Auth
        updateUser(_id: ID!, 
                    uusername: String!,
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
        deleteUser(_id: ID!): Status
        loginUser(uemail: String!, upassword: String!): Auth
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;
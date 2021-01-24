import { users } from "./db";

const person = {
    name: "hoi"
    ,age: 18
    ,gender: "female"
};

const resolvers = {
    Query: {
        user:() => person,
        users:() => users
    }
}

export default resolvers;
import { GraphQLServer, Gserver } from "graphql-yoga";

const server = new GraphQLServer({

})

server.start(()=> console.log("Graphql running"));
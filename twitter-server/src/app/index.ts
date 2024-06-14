import express from "express";
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4"
import bodyParser from "body-parser";
import {User} from "./user"

export async function initialServer(){
    const app = express()

    app.use(bodyParser.json())

    const graphqlServer = new ApolloServer({
        typeDefs: `
        ${User.types}
        type Query{
           ${User.queries}
        
        }`,

        resolvers:{
            Query:{
                // sayHello: ()=> `Hello from graphql server`
                ...User.resolvers.queries



            },
            // Mutation:{}
        }
    })

    await graphqlServer.start()

    app.use('/graphql', expressMiddleware(graphqlServer))

    return app

}
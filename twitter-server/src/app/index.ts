import express from "express"
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4"
import { User } from "./user/mutations";

export async function initServer(){
    
    const app = express()

    app.use(bodyParser.json())

    const graphqlServer = new ApolloServer({
        typeDefs:`
        ${User.types}
        type Query{
            ${User.queries}
        }
       

        `,
        resolvers:{
            Query: {
                ...User.resolvers.queries,
            },
            // Mutation: {}
        }
    })

    await graphqlServer.start()

    app.use('/graphql', expressMiddleware(graphqlServer))

    return app

}


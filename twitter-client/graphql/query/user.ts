
// import {graphql} from "graphql"
//write a query
export const verfiyUserGoogleTokenQuery = `#graphql
    query VerifyUserGoogleToken($token: String!)
    verfiyGoogleToken(token: $token)

`
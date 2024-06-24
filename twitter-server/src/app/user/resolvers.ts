import axios from "axios"

const queries = {
    verifyGoogleToken: async(parent:any, {token}:{token:String}) =>{
        const googleToken = token
        const googleOAuthURL = new URL('https//oauth2.googleapis.com/tokeninfo')
    }
}

export const resolvers = {queries}
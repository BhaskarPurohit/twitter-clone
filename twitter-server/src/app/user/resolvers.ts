import axios from "axios"
import { PrismaClient } from "@prisma/client"
interface GoogleTokenResult{
    iss?: string
    nbf?: string
    aur?: string
    sub?: string
    email?: string
    email_verified?: string
    azp?: string
    name?: string
    picture?: string
    given_name?: string
    family_name?: string
    iat?: string
    exp?: string
    jti?: string
    alg?: string
    kid?: string
    tpy?: string
}

const queries = {
    verifyGoogleToken: async(parent:any, {token}:{token: string}) =>{
        const googleToken = token
        //generate a new URL
        const googleOAuthURL = new URL('https://oauth2.googleapis.com/tokeninfo')
        googleOAuthURL.searchParams.set('id_token', googleToken)


        //making api call to google
        const {data} = await axios.get<GoogleTokenResult>(googleOAuthURL.toString(),{
            responseType: 'json'
        })
        // return token
        // console.log(data);
        
        //check if the user exists already
        const prismaClient = new PrismaClient()
        const user = await prismaClient.user.findUnique({
            where: {email: data.email}
        })

        //if there is no user, create a user
        if(!user){
            await prismaClient.user.create({
                data:{
                    email: data.email,
                    firstName: data.given_name,
                    lastName: data.family_name,
                    profileImageURL: data.picture
                }
            })
        }

        return 'ok'
        
    }
}

export const resolvers = {queries}
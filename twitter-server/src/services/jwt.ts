import JWT from 'jsonwebtoken'


import {prismaClient} from "../clients/db"
import { User } from '@prisma/client'

const JWT_SECRET = '$bhaskar'
class JWTService{
    public static  generateTokenForUser(user: User){
    
        const payload = {
            id: user?.id,
            email: user?.email
        }

        const token = JWT.sign(payload, '')

        return token
    }
}

export default JWTService
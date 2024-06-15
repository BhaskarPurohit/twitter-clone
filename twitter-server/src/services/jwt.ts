//jwt service
import JWT from 'jsonwebtoken'
import {prismaClient} from "../clients/db"

const JWT_SECRET = "bhaskar$100k"
class JWTService{
    public static async generateTokenForUser(userId: string){
        const user = await prismaClient.user.findUnique(
            {
                where:{id: userId}
            }
        )
        const payload = {
            id: user?.id,
            email: user?.email

        }

        const token = JWT.sign(payload, JWT_SECRET)

        return token
    }
}

export default JWTService
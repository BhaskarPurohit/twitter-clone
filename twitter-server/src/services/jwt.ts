//jwt service
import {prismaClient} from "../clients/db"
class JWTService{
    public static async generateTokenForUser(userId: string){
        const user = await prismaClient.user.findUnique(
            {
                where:{id: userId}
            }
        )
        const payload = {
            
        }
    }
}
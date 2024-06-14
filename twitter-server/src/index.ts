import { initialServer } from "./app";

async function  init(){
    const app = await initialServer()
    app.listen(8000, ()=> console.log("Server started at port 8000")
    )
    
}

init()
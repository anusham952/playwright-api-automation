import { request } from "node:http"
import{test, expect} from "@playwright/test"

test("get API", async({request})=>{

    const theResult = await request.get('https://jsonplaceholder.typicode.com/posts/1')
    const finalResult = await theResult.json();
    expect(finalResult).toHaveProperty("userId",1)
   console.log(finalResult);
   const theHeaders = theResult.headers();
   console.log(theHeaders);
   const statCode = theResult.status();
   expect(statCode).toBe(200);
   const responceOf= theResult.statusText();
   console.log(responceOf);
   expect(responceOf).toBe('OK')
   expect(finalResult).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
   expect(finalResult.body).toContain("quia et suscipit")

})


test("get the data", async({request})=>{
    const getData= await request.get("https://restful-booker.herokuapp.com/booking/1")
    console.log(await getData.json())
    console.log("the status code is:"+ await getData.status())
})

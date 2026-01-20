import{test, expect} from "@playwright/test"
import { request } from "node:http"


test("Making the post call", async({request})=>{

const authodata= await { "username" : "admin", "password" : "password123"
}

    const responce = await request.post("https://restful-booker.herokuapp.com/auth", {headers:{"Content-Type":"application/json"}, data:authodata})
    expect(responce.status()).toBe(200)
    console.log("The status code is:" +responce.status())
    const tokenName = await responce.json();
    expect(tokenName.token).not.toBeNull()

})



//Create Booking

test("Create booking", async({request})=>{

        const passData= await {
            "firstname" : "Anusha",
            "lastname" : "Mohan",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2026-02-01",
                "checkout" : "2026-03-01"
            },
            "additionalneeds" : "Breakfast"
        }
    const createBooking= await request.post("https://restful-booker.herokuapp.com/booking", {headers:{"Content-Type": "application/json"}, data:passData})
    expect(createBooking.status()).toBe(200)
    const getResult= await createBooking.json();
    console.log(getResult)
    expect(getResult.token).not.toBeNull()
    expect(passData.firstname).toBe("Anusha")

})
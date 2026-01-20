import{test, expect} from "@playwright/test"
import { request } from "node:http"

test("delete method", async({request})=>{
        const authdata={
        "username" : "admin",
        "password" : "password123"
        }
    const responce= await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"}, data:authdata})
    const responceJson= await responce.json();
    const authJson= await responceJson.token
    console.log("The auth token is:" +authJson)

    
    const BookingDetails= {
    "firstname" : "Anu",
    "lastname" : "M",
    "totalprice" : 444,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    const createBking = await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"}, data: BookingDetails})
    const resjson = await createBking.json()
    console.log(resjson)
    const bookingID= await resjson.bookingid
    console.log(await "The booking ID is"+bookingID)

// for the delete we don't need data but we need headers

    const deletindData = await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingID,
                {headers:{"Content-Type":"application/json","Cookie":"token="+authJson}})

    console.log(deletindData.status())
    console.log(deletindData.statusText())

    expect(deletindData.status()).toBe(201)
    expect(deletindData.statusText()).toBe("Created")
    

    
})
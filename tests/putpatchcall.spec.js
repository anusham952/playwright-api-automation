import{test, expect} from "@playwright/test"
import { request } from "node:http"

test("putandpatch call", async({request})=>{
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

            const newdata= {
            "firstname" : "xia",
            "lastname" : "liu",
            "totalprice" : 952,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Dinner"
        }
    const updateMeth = await request.put("https://restful-booker.herokuapp.com/booking/"+bookingID,{headers:{"Content-Type":"application/json",
                                    "Accept": "application/json","Cookie":"token="+authJson}, data:newdata})
    const newjson= await updateMeth.json();
    console.log(newjson)
    expect(newjson.totalprice).toBe(952)
    expect(newjson.additionalneeds).toContain("Dinner")


        const newdatapatch={"firstname" : "una"}

    const updatepatchMeth = await request.patch("https://restful-booker.herokuapp.com/booking/"+bookingID,{headers:{"Content-Type":"application/json",
                                    "Accept": "application/json","Cookie":"token="+authJson}, data:newdatapatch})
    const newjson2= await updatepatchMeth.json();
    console.log( await newjson2)
})
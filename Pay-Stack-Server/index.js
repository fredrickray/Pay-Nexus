const express = require ("express");
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 8080
const bcrypt = require("bcrypt");
const { response } = require("express");
const saltRounds = 10;


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// To Connect to the database 
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'Pay-Stack'
    }
});


app.get("/delivery", (req, res) => {
    res.send("Running on port " + port)
})


// To Register a Merchant
// app.post("/register", (req, res) => {
//     bcrypt.hash(req.body.password, saltRounds, async(err, hash) => {
//         const {fname, lname, email, phone, business_name, business_sector, business_phone, username, state} = req.body
//         const password = hash

//          let user = await knex("Merchants").insert({email: email, fname: fname, lname: lname, password: password, username: username, state: state, phone: phone, business_name: business_name, business_phone: business_phone, business_sector: business_sector}).then((result)=> {
//             // console.log(result)
           
//             if(user) {
//                 res.json({ success: true, message: "ok", status: "success", result})
//                 console.log("1 user",user);
//             } else{
//                 res.json({success: false, message: "error", status: "failed"})
//                 console.log("2 response",response);
//             }
//          }).catch((err) => {
//             console.log(err)
//             // console.log("3",user);
//          }) 
        
//     })
// })


app.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, async(err, hash) => {
        const {fname, lname, email, phone, business_name, business_sector, business_phone, username, state} = req.body
        const password = hash

         try {
            let user = await knex("Merchants").insert({email: email, fname: fname, lname: lname, password: password, username: username, state: state, phone: phone, business_name: business_name, business_phone: business_phone, business_sector: business_sector})
                res.json({ success: true, message: "ok", status: "success", user})
                console.log(user)
            
         } catch (error) {
            console.log(error)
         }
        
    })
})





// if(user) {
//     res.json({ success: true, message: "ok", status: "success", result})
//     console.log("1 user",user);
// } else{
//     res.json({success: false, message: "error", status: "failed"})
//     console.log("2 response",response);
// }



// To Login a Merchant/User
app.post("/login", async(req, res) => {
    const {email, password} = req.body

    try {
        let user = await knex("Merchants").where({email: email}).first()

        if(user) {
            console.log("user",user)
            // console.log("user.password",user.password)
            let hashedPassword = user.password
            let isValid = await bcrypt.compare(password, hashedPassword);
            // console.log("hashedPassword",hashedPassword)

            if (isValid) {
                // console.log("isValid",isValid);
                // console.log("2", user)
              return  res.status(200).json({ status: "success", data: user, message: "successful login" })
                            
            }
        } return  res.status(401).json({ status: "Failed", message: "Failed to login" })
    } catch (error) {
        console.log(error)        
    }
})


// To create a store for the products
// app.post("/store", (req, res) => {
//     const {name, currency, store_link, email} = req.body

//     knex("Store").insert({name: name, currency: currency, store_link: store_link, email: email}).then((response) => {
//         console.log(response)
//         res.status(200).json({message: "Store created", status: "Success", response})
//     }).catch((err) => {
//         console.log(err)
//         res.status(401).json({message: "Failed to create store", status: "Failed", err})
//     })
// })

app.post("/store", async(req, res) => {
    const {name, currency, store_link, email, logo_link} = req.body

    try {
     let store = await knex("Store").insert({name: name, currency: currency, store_link: store_link, email: email, logo_link: logo_link})
        res.send({message: "Store created successfully", status: "Success", store})
    } catch (error) {
        res.send({message: "Failed to create store", status: "Error", error})
        console.log(error)
    }
})



// To Create a Product 
app.post("/product", (req, res) => {
    const {name, price, quantity, email, description, store}  = req.body

    knex("Goods").insert({name: name, price: price, email: email, quantity: quantity, description: description, store: store}).then((response) => {
        console.log(response)
        res.status(200).json({message: "Store created", status: "Success", response})
        console.log(response)
    }).catch((err) => {
        console.log(err)
        res.status(401).json({message: "Failed to create product", status: "failed", err})

    })
})


// TO Delete a product
app.post("/prdouct-delete", async(req, res) => {

    const id = req.body.id

    try {
        let response = knex("Goods").where({id: id}).delete()
        console.log(response)
        if(response) {
            res.status(200).json({status: "Deleted", message: "successfully Deleted", response})
        } else{
            res.status(200).json({status: "Failed", message: "Failed to delete data"})
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({message: "there's an error", status: "Error"})
    }

})


// To create a delivery info for a product
app.post("/delivery", (req, res) => {
    const {name, location, fee, email} = req.body

    knex("delivery").insert({name: name, location: location, fee: fee, email: email}).then((response) => {
        console.log(response)
        res.status(200).json({message: "Delivery information Created", status: "success", response})
    }).catch((err)=> {
        console.log(err)
        res.status(401).json({message: "Delivery info not created", status: "failed", err})
    })
})


// To create An about us page for merchants
app.post("/about", (req, res) => {
    const {phone, email, info, merchant} = req.body

   let details = knex("about").insert({phone: phone, email: email, info: info, merchant: merchant}).then((response) => {
        console.log(response)
        if(details) {
            res.status(200).json({status: "success", message: "About page created", response})
            // res.send({})
        } else{
            res.status(200).json({status: "failed", message: "About page not created"})
            // res.send({})
        }
    }).catch((err) => {
        console.log(err)
        res.status(401).json({message: "error", err})
    })
})

// // To customize Product Details 
// app.post("product-edit", (req, res) => {
//     const 
// })



// To get the History of Created Products
app.post("product-retrieve", async(req, res) => {
    let merchant = req.body.merchant

    try {
        let response =  await knex("Goods").where({merchant: merchant})
        let data = response
        let data2 = JSON.parse(JSON.stringify(data))
        res.status(200).json({status: "success", message: "working", data})
        console.log(data) 
    } catch (error) {
        console.log(error)
        res.status(401).json({status: "Failed", message: "Failed"})
    }

}) 


app.listen(port, () => {
    console.log("Running on port " + port)
})
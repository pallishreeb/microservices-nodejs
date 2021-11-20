const express = require("express")
const app = express()

const mongoose = require("mongoose")
const axios = require("axios")


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


mongoose.connect("mongodb://localhost:27017/ordersservice", () => {
    console.log("Database connected - Orders")
})

// Model is loaded
require("./Order")
const Order = mongoose.model("Order")

// Will create a new order
app.post("/order", (req, res) => {

    var newOrder = {
        CustomerID: mongoose.Types.ObjectId(req.body.CustomerID),
        BookID: mongoose.Types.ObjectId(req.body.BookID),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    }

    var order = new Order(newOrder)

    order.save().then(() => {
        res.send("Order create with")
    }).catch((err) => {
        if(err){
            throw err
        }
    })
})

app.get("/orders", (req, res) => {

    Order.find().then((books) => {
        res.json(books)        
    }).catch((err) => {
        if(err){
            throw err
        }
    })

})

app.get("/order/:id", (req, res) => {

    Order.findById(req.params.id).then((order) => {
        if(order){

            axios.get("http://localhost:5555/customer/" + order.CustomerID).then((response) => {
                
                var orderObject = {customerName: response.data.name, bookTitle: ''}

                axios.get("http://localhost:4545/book/" + order.BookID).then((response) => {

                    orderObject.bookTitle = response.data.title
                    res.json(orderObject)
                })

            })
        }else{
            res.send("Invalid Order")
        }
    })

})


app.listen(7777, () => {
    console.log("Up and running - Orders service")
})
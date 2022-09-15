const express = require("express")
let cors = require("cors");
const app = express()
app.use(cors());

const mongoose = require("mongoose")
app.use(express.json())

// DB Connection
let dp = mongoose.connect("mongodb+srv://Talhaarshad:Talha2323@cluster0.yqopxr3.mongodb.net/addtocart", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("Connect to DB")
    } else {
        console.log("error", err);
    }
})
// Schema

// const appleschem = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     id: Number,
//     tittle: String,
//     img: String,
//     Price: Number,
//     status: String,
//     qunatity: Number,
//     total: Number

// })
const Appleschema = {
    id: Number,
    tittle: String,
    img: String,
    Price: Number,
    status: String,
    qunatity: Number,
    total: Number
}
const monmodel = mongoose.model("AppleProductData", Appleschema)


app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get("/appleinfo", async (req, res) => {
    console.log("inside apple function");
    monmodel.find({}, (err, data) => {
        if (err) {
            res.send("Error")
        } if (data.length === 0) {
            res.send("Not found")
        }
        else {
            res.send(data)
        }
    })
})
app.post("/orderinfo", (req, res) => {
    console.log(req.body);
    res.status(200).json({ sucess: true })

})
// /Post
// app.post("/post", async (req, res) => {
//     console.log("inside post function");
//     const data = new monmodel({
//         name: req.body.name,
//         email: req.body.email,
//         id: req.body.id,
//     })
//     const val = await data.save();
//     res.json(val)
//     // res.send("Posted")
// })

// //Put Mean Update the Value
// app.put("/update/:id", async (req, res) => {
//     let upid = req.params.id
//     let upname = req.body.name
//     let upemail = req.body.email
//     monmodel.findOneAndUpdate({ id: upid }, { $set: { name: upname, email: upemail, } },
//         { new: true }, (err, data) => {
//             if (err) {
//                 res.send("Error")
//             } else {
//                 if (data === null) {
//                     console.log("Data no found");
//                 } else {
//                     res.send(data)
//                 }
//             }

//         })
// })

// // fetch Method
// app.get("/fetch/:id", (req, res) => {
//     fetchid = req.params.id
//     monmodel.find(({ id: fetchid }), (err, data) => {
//         if (err) {
//             res.send("Error")
//         } else {
//             if (data.length === 0) {
//                 res.send("not found Resut")
//             } else {
//                 res.send(data)
//             }
//         }
//     })
// })
// //delete
// app.delete("/del/:id", (req, res) => {
//     const delid = req.params.id
//     monmodel.findOneAndDelete(({ id: delid }), (err, docs) => {
//         if (err) {
//             res.send(err)
//         }
//         if (docs === null) {
//             res.send("Wrong ID")
//         } else {
//             res.send(docs)
//         }
//     })
// })

app.listen(5000, () => {
    console.log("on port 5000");
})
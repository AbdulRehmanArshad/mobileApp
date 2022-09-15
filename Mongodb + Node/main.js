const express = require("express")
const app = express()

const mongoose = require("mongoose")
app.use(express.json())

// DB Connection
mongoose.connect("mongodb+srv://Talhaarshad:Talha2323@cluster0.yqopxr3.mongodb.net/addtocart", {
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
const sch = {
    name: String,
    email: String,
    id: Number,
}
const monmodel = mongoose.model("CHECK", sch)

//Post
app.post("/post", async (req, res) => {
    console.log("inside post function");
    const data = new monmodel({
        name: req.body.name,
        email: req.body.email,
        id: req.body.id,
    })
    const val = await data.save();
    res.json(val)
    // res.send("Posted")
})

//Put Mean Update the Value
app.put("/update/:id", async (req, res) => {
    let upid = req.params.id
    let upname = req.body.name
    let upemail = req.body.email
    monmodel.findOneAndUpdate({ id: upid }, { $set: { name: upname, email: upemail, } },
        { new: true }, (err, data) => {
            if (err) {
                res.send("Error")
            } else {
                if (data === null) {
                    console.log("Data no found");
                } else {
                    res.send(data)
                }
            }

        })
})

// fetch Method
app.get("/fetch/:id", (req, res) => {
    fetchid = req.params.id
    monmodel.find(({ id: fetchid }), (err, data) => {
        if (err) {
            res.send("Error")
        } else {
            if (data.length === 0) {
                res.send("not found Resut")
            } else {
                res.send(data)
            }
        }
    })
})
//delete
app.delete("/del/:id", (req, res) => {
    const delid = req.params.id
    monmodel.findOneAndDelete(({ id: delid }), (err, docs) => {
        if (err) {
            res.send(err)
        }
        if (docs === null) {
            res.send("Wrong ID")
        } else {
            res.send(docs)
        }
    })
})

app.listen(3000, () => {
    console.log("on port 3000");
})
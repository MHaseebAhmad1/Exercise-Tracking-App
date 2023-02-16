const model = require("./model");
const mongoose = require('mongoose');
var tech = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var app = tech();
const PORT = 4000;

const cors = require("cors");
app.use(cors());

mongoose.set('strictQuery', false);

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true
});

mongoose.connection.once("open", () => {
    console.log("Connected to Mongoose");
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

app.get("/show", async (req, res) => {
    let users = await model.find({});
    res.send(users);
});

app.post("/create", upload.single('testImage'), (req, res) => {
    let user = new model({
        name: req.body.name,
        email: req.body.email,
        exercise: req.body.exercise,
        date: req.body.date,
        duration: req.body.duration,
        img:
        {
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: 'image/png'
        }
    });
    user.save().then((a) => { res.send(a) }).catch((err) => res.status(400).json("Error: " + err));
});

app.delete('/delete/:_id', async (req, res) => {
    let users = await model.deleteOne({ _id: req.params._id });
    res.send(users);
});

app.patch("/update/:_id", upload.single('testImage'), function (req, res) {
    model.findOneAndUpdate({ _id: req.params._id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            exercise: req.body.exercise,
            date: req.body.date,
            duration: req.body.duration,
            img:
            {
                data: fs.readFileSync('uploads/' + req.file.filename),
                contentType: 'image/png'
            }
        }
    })
        .then((a) => res.json(a))
        .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(PORT, () => {
    console.log("port is connected")
})
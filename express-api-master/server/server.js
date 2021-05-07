require("dotenv").config();
const express = require("express");

const app = express();

//MIDDLEWARE TO GET DATA FROM THE BODY. IT CONVERTS TO A JAVASCRIPT OBJECT.
app.use(express.json());

//MIDDLEWARE
app.use((req, res, next) => {

    next();
});
app.get("/timetable/:id/:semester/:academicyear", (req, res) => {

});

app.get("/unit/:id/:category/", (req, res) => {

});

//only lecturer
app.get("/onlineclass/:id/:unitCode/", (req, res) => {

});

app.get("/student", (req, res) => {

});
app.get("/student/:id", (req, res) => {

});
app.get("/academicrecord/:id", (req, res) => {

});

app.get("/studentunit/:id", (req, res) => {

});

app.get("/assessment/:id/:unitCode", (req, res) => {

});

app.get("/semestermarks/:id/:unitCode", (req, res) => {

});

app.get("/lecturer/:id/", (req, res) => {

});

app.get("/lecturerunit/:id/", (req, res) => {

});
app.get("/lecturerstudent/:id/", (req, res) => {

});

app.get("/book", (req, res) => {

});

app.get("/book/:id", (req, res) => {

});

app.get("/libarian", (req, res) => {

});

app.get("/libarian/:id", (req, res) => {

});

app.get("/examtimetable/:unitCode", (req, res) => {

});

app.post("/student", (req, res) => {

});
app.post("/librarian", (req, res) => {

});
app.post("/lecturer", (req, res) => {

});
app.post("/book", (req, res) => {

});
app.post("/assessment", (req, res) => {

});
app.post("/timetable", (req, res) => {

});
app.post("/onlineclass", (req, res) => {

});
app.post("/examtimetable", (req, res) => {

});

app.put("/student/:id", (req, res) => {

});
app.put("/librarian/:id", (req, res) => {

});
app.put("/lecturer/:id", (req, res) => {

});
app.put("/assessment/:id", (req, res) => {

});
app.put("/timetable/:id", (req, res) => {

});
app.put("/onlineclass/:id", (req, res) => {

});
app.put("/examtimetable/:id", (req, res) => {

});
app.put("/academicreport/:id", (req, res) => {

});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening on port ${port}...`)
});

require("dotenv").config();
const express = require("express");
const db = require("./db")
const app = express();
//bcrypt
const bcrypt = require('bcrypt')
//jwt generator
const jwtGenerator = require('./utils/jwtGenerator')
//import math for randomID
const math = require('math-random')
//cors
const cors = require('cors')
//authorization of routes
const authorization = require('./middleware/authorization')
//validation
const validInfo = require('./middleware/validInfo')

//MIDDLEWARE TO GET DATA FROM THE BODY. IT CONVERTS THE DATA TO A JAVASCRIPT OBJECT.
app.use(express.json());

//MIDDLEWARE
app.use((req, res, next) => {

    next();
});


//Login
app.post("/login", validInfo, async (req,res)=>{
    const {email, password} = req.body;


    try {
        const student = await db.query(
            "SELECT email FROM student WHERE email = $1",
            [email]);
        const lecturer = await db.query(
            "SELECT email FROM lecturer WHERE email = $1",
            [email]);
        const librarian = await db.query(
            "SELECT email FROM librarian WHERE email = $1",
            [email]);
        const administrator = await db.query(
            "SELECT email FROM administrator WHERE email = $1",
            [email]);


        if(student.rows.length !== 0){
            const user = await db.query("SELECT * FROM student WHERE email = $1", [email])
            if (user.rows.length === 0) {
                return res.status(401).json("Invalid Credential");
            }
            //check password matches in db
            const validPassword = await bcrypt.compare(password, user.rows[0].password);
            console.log("valid password:" + validPassword);
            if (!validPassword) {
                return res.status(401).json("password or email is incorrect")
            }

            //generate jwt token
            const token = jwtGenerator(user.rows[0].email);
            res.json({token});
            console.log("success")
            console.log("student")
        }
        else if(lecturer.rows.length !== 0){
            const lecturer = await db.query("SELECT * FROM lecturer WHERE email = $1", [email]);
            if (lecturer.rows.length === 0) {
                return res.status(401).json("Invalid Credential");
            }
            const validPassword = await bcrypt.compare(password, lecturer.rows[0].password);
            console.log("valid password:" + validPassword);
            if (!validPassword) {
                return res.status(401).json("password or email is incorrect")
            }
            const token = jwtGenerator(lecturer.rows[0].email);
            res.json({token});
            console.log("success")
            console.log("lecturer")
        }
        else if(librarian.rows.length !== 0){
            const librarian = await db.query("SELECT * FROM librarian WHERE email = $1", [email]);
            if (librarian.rows.length === 0) {
                return res.status(401).json("Invalid Credential");
            }
            const validPassword = await bcrypt.compare(password, librarian.rows[0].password);
            console.log("valid password:" + validPassword);
            if (!validPassword) {
                return res.status(401).json("password or email is incorrect")
            }
            const token = jwtGenerator(librarian.rows[0].email);
            res.json({token});
            console.log("success")
            console.log("librarian")
        }
        else if(administrator.rows.length !== 0){
            const administrator = await db.query("SELECT * FROM administrator WHERE email = $1", [email]);
            if (administrator.rows.length === 0) {
                return res.status(401).json("Invalid Credential");
            }
            const validPassword = await bcrypt.compare(password, administrator.rows[0].password);
            console.log("valid password:" + validPassword);
            if (!validPassword) {
                return res.status(401).json("password or email is incorrect")
            }
            const token = jwtGenerator(administrator.rows[0].email);
            res.json({token});
            console.log("success")
            console.log("administrator")
        }


    }
    catch (e) {
        console.log(e)
    }

    console.log("post login")
    console.log("get id" + req.params.id)
})

//register
app.post("/register", validInfo, async (req, res)=>{
    const {name, email, password, password2, profession} =req.body;
    const randomID = math();
    const student = "student";
    const librarian = "librarian";
    const lecturer = "lecturer";
    const administrator = "administrator";

    try {
        if (profession === student) {
            const user = await db.query("SELECT * FROM student WHERE email = $1", [email])

            if (user.rows.length !== 0) {
                console.log("user exist");
                return res.status(401).json("user exist");
            }

            if (password !== password2) {
                return res.status(401).json("password do not match")
            }

            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const bcryptPassword = await bcrypt.hash(password, salt);

            const newUser = await db.query("INSERT INTO student(studentid,studentname, email, password) VALUES ($1,$2, $3,$4) RETURNING *", [randomID, name, email, bcryptPassword]);
            //generate jwt token
            const token = jwtGenerator(newUser.rows[0].email);
            res.json({token});
            console.log("student created ");

            console.log("new user")

        }

         else if(profession === librarian){
            const librarian = await db.query("SELECT * FROM librarian WHERE email = $1", [email]);
            if (librarian.rows.length !== 0) {
                console.log("user exist");
                return res.status(401).json("user exist");
            }
            if(password !== password2){
                return res.status(401).json("password do not match")
            }

            const saltRounds =10;
            const salt = await bcrypt.genSalt(saltRounds);
            if(password === password2){
                const bcryptPassword = await bcrypt.hash(password,salt);
                const newLibarian = await db.query("INSERT INTO librarian(librarianID, librarianName, email, password) VALUES ($1,$2, $3,$4) RETURNING *",[randomID,name, email, bcryptPassword]);
                //generate jwt token
                const token = jwtGenerator(newLibarian.rows[0].email);
                res.json({token});
                console.log("librarian created ");

            }

        }

        else if(profession === lecturer){
            const lecturer = await db.query("SELECT * FROM lecturer WHERE email = $1", [email]);
            if (lecturer.rows.length !== 0) {
                console.log("user exist");
                return res.status(401).json("user exist");
            }
            if(password !== password2){
                return res.status(401).json("password do not match")
            }

            const saltRounds =10;
            const salt = await bcrypt.genSalt(saltRounds);
            if(password === password2){
                const bcryptPassword = await bcrypt.hash(password,salt);
                const newLecturer = await db.query("INSERT INTO lecturer(lecturerID, lecturerName, email, password) VALUES ($1,$2, $3,$4) RETURNING *",[randomID,name, email, bcryptPassword]);
                //generate jwt token
                const token = jwtGenerator(newLecturer.rows[0].email);
                res.json({token});
                console.log("lecturer created ");

            }

        }

        else if(profession === administrator){
            const administrator = await db.query("SELECT * FROM administrator WHERE email = $1", [email]);
            if (administrator.rows.length !== 0) {
                console.log("user exist");
                return res.status(401).json("user exist");
            }
            if(password !== password2){
                return res.status(401).json("password do not match")
            }

            const saltRounds =10;
            const salt = await bcrypt.genSalt(saltRounds);
            if(password === password2){
                const bcryptPassword = await bcrypt.hash(password,salt);
                const newAdministrator = await db.query("INSERT INTO administrator(adminID, adminName, email, password) VALUES ($1,$2, $3,$4) RETURNING *",[randomID,name, email, bcryptPassword]);
                //generate jwt token
                const token = jwtGenerator(newAdministrator.rows[0].email);
                res.json({token});
                console.log("admin created ");

            }

        }


    }
    catch (e) {
        console.log(e)
    }
    console.log("post register")
});

//verify jwt token eveytime you refresh
app.get("/is-verify", authorization, async(req, res) => {
    try{

        res.json(true);
        console.log("is verify true")
    }
    catch (e) {
        console.log(e)
    }
});


//dashboard
app.get("/dashboard", authorization, async (req, res)=>{
    console.log("get dashboard");
    console.log(req.user)
    try{
        const student = await db.query(
            "SELECT email FROM student WHERE email = $1",
            [req.user]);
        const lecturer = await db.query(
            "SELECT email FROM lecturer WHERE email = $1",
            [req.user]);
        const librarian = await db.query(
            "SELECT email FROM librarian WHERE email = $1",
            [req.user]);
        const administrator = await db.query(
            "SELECT email FROM administrator WHERE email = $1",
            [req.user]);


        if(student.rows.length !== 0){
            const user = await db.query(
                "SELECT studentname FROM student WHERE email = $1",
                [req.user]);
            res.json(user.rows[0]);

            console.log("student")
        }
        else if(lecturer.rows.length !== 0){
            const user = await db.query(
                "SELECT lecturername FROM lecturer WHERE email = $1",
                [req.user]);

            res.json(user.rows[0]);

            console.log("lecturer")
        }
        else if(librarian.rows.length !== 0){
            const user = await db.query(
                "SELECT librarianname FROM librarian WHERE email = $1",
                [req.user]);

            res.json(user.rows[0]);
            console.log("tash name:" +   res.json(user.rows[0].librarianname))
            console.log("librarian")
        }
        else if(administrator.rows.length !== 0){
            const user = await db.query(
                "SELECT adminname FROM administrator WHERE email = $1",
                [req.user]);

            res.json(user.rows[0]);
            console.log("administrator")
        }

        console.log("try block");
        const user = await db.query(
            "SELECT studentname FROM student WHERE email = $1",
            [req.user]);

        res.json(user.rows[0]);

    }
    catch (e) {
        console.log(e)
    }
});



//GET A STUDENT TIME TABLE

//NOTE TO SELF: MAKE SURE YOU HAVE CHANGED STUDENTTIMETABLE VARIABLE EVERYWHERE ;)

app.get("/timetable/:id/:semester/:academicyear",async (req, res) => {
    try{
        console.log(req.params.id + " " + req.params.semester + " " + req.params.academicyear)
        const result = await db.query("select timetable.*, unit.unitname\n" +
            "from timetable\n" +
            "left join unit\n" +
            "on timetable.unitcode = unit.unitcode \n" +
            "where timetable.studentid = $1 AND timetable.semester = $2 and timetable.academicyear = $3 ", [req.params.id,req.params.semester,req.params.academicyear ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

//ADMINISTRATOR ROUTE
app.get("/unit",async (req, res) => {
    try{
    const result = await db.query(" SELECT * FROM unit");
    console.log(result)
    await res.status(200).json({
        status: "success",
        results: result.rows.length,
        data: {
            studentTimeTable: result.rows,
        }
    })

}catch (err) {
    console.log(err)
}
});

//GET UNIT FOR A SPECIFIC LECTURER
app.get("/unit/:id/", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM unit WHERE unit.lecturerid = $1", [req.params.id]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

//GET LECTURER UNIT FOR HIS MOODLE
app.get("/onlineclass/:id/", async (req, res) => {
    try{
        const result = await db.query(" SELECT onlineclass.*, unit.unitname\n" +
            "FROM onlineclass\n" +
            "LEFT JOIN unit\n" +
            "ON onlineclass.unitcode = unit.unitcode\n" +
            "WHERE onlineclass.lecturerid = $1", [req.params.id]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

//GET ONLINE CLASS TO SHOW STUDENT AVAILABLE TIMETABLE
app.get("/onlineclass/:unitcode/", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM onlineclass WHERE onlineclass.unitcode = $1", [req.params.unitcode]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

//GET TIMETABLE FOR WHITEBOARD DASHBOARD
app.get("/onlineclass/:id/:semester/:academicyear", async (req, res) => {
    try{
        const result = await db.query(" SELECT onlineclass.*, unit.unitname\n" +
            "FROM onlineclass\n" +
            "LEFT JOIN unit\n" +
            "ON onlineclass.unitcode = unit.unitcode\n" +
            "WHERE onlineclass.lecturerid = $1 \n" +
            "AND onlineclass.semester = $2\n" +
            "AND onlineclass.academicyear = $3", [req.params.id,req.params.semester,req.params.academicyear ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});


//FOR ADMIN
app.get("/student", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM student");
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.get("/student/:id", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM student WHERE student.studentid = $1",req.params.id );
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.get("/academicrecord/:id",async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM academic_record WHERE student.studentid = $1",req.params.id );
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

//for admin and lecturer
app.get("/studentunit", async (req, res) => {


    try{
        const result = await db.query("SELECT * FROM student_unit ");
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentUnit: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }

});
app.get("/studentunit/:id",async  (req, res) => {

    try{
        const result = await db.query("SELECT * FROM student_unit WHERE studentid = $1 ", [req.params.id]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentUnit: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.get("/assessment/:id/:unitCode", async (req, res) => {
    try{
        const result = await db.query("SELECT assessment.*, unit.unitname\n" +
            "FROM assessment \n" +
            "LEFT JOIN unit\n" +
            "ON assessment.unitcode = unit.unitcode\n" +
            "WHERE assessment.studentid = $1 \n" +
            "AND  assessment.unitcode = $2\n ", [req.params.id, req.params.unitcode]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentUnit: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

// app.get("/semestermarks/:id/:unitCode", (req, res) => {
//
// });

app.get("/lecturer", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM lecturer");
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.get("/lecturer/:id/", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM lecturer WHERE lecturer.lecturerid = $1",[req.params.id] );
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.get("/lecturerunit/:id/", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM unit WHERE unit.lecturerid = $1",[req.params.id] );
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});
// app.get("/lecturerstudent/:id/", (req, res) => {
//
// });

app.get("/book", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM book");
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.get("/book/:id", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM book WHERE book.bookid = $1 ",[req.params.id] );
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.get("/librarian", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM librarian" );
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.get("/librarian/:id", async (req, res) => {
    try{
        const result = await db.query(" SELECT * FROM librarian WHERE librarian.librarian.id = $1 ",[req.params.id] );
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.get("/examtimetable/:id/:academicyear", async (req, res) => {
    try{
        const result = await db.query(" SELECT student_unit.*, exam_timetable.examdate,exam_timetable.examtime,exam_timetable.examvenue, unit.unitname\n" +
            "FROM student_unit\n" +
            "LEFT JOIN exam_timetable\n" +
            "ON student_unit.unitcode = exam_timetable.unitcode\n" +
            "LEFT JOIN unit\n" +
            "ON student_unit.unitcode = unit.unitcode\n" +
            "WHERE student_unit.studentid = $1 AND exam_timetable.academicyear = $2 ",[req.params.id,req.params.academicyear ] );
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                studentTimeTable: result.rows,
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.post("/student",async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "student (studentid, studentgivenname,\n" +
            "\t\t phonenumber,dateofbirth,\n" +
            "\t\t citizenship,sex,residenceaddress,\n" +
            "\t\t feestatus,academicyear,startingdate,\n" +
            "\t\tpassword, email,academicstatus,profileimagelink,\n" +
            "\t\tadminid,studentsurname) \n" +
            "VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING * ", [
            req.body.studentid,
            req.body.studentgivenname,
            req.body.phonenumber,
            req.body.dateofbirth,
            req.body.citizenship,
            req.body.sex,
            req.body.residenceaddress,
            req.body.feestatus,
            req.body.academicyear,
            req.body.startingdate,
            req.body.password,
            req.body.email,
            req.body.academicstatus,
            req.body.profileimagelink,
            req.body.adminid,
            req.body.studentsurname


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newStudent: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.post("/librarian", async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "librarian (librarianid, librariangivenname,\n" +
            "\t\t phonenumber,dateofbirth,\n" +
            "\t\t citizenship,sex,residenceaddress,\n" +
            "\t\tpassword, email,profileimagelink,\n" +
            "\t\tadminid,librariansurname) \n" +
            "VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING * ", [
            req.body.librarianid,
            req.body.librariangivenname,
            req.body.phonenumber,
            req.body.dateofbirth,
            req.body.citizenship,
            req.body.sex,
            req.body.residenceaddress,
            req.body.password,
            req.body.email,
            req.body.profileimagelink,
            req.body.adminid,
            req.body.librariansurname,


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newLibrarian: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.post("/lecturer", async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "lecturer (lecturerid, lecturergivenname,\n" +
            "\t\t phonenumber,dateofbirth,\n" +
            "\t\t citizenship,sex,residenceaddress,\n" +
            "\t\tpassword, email,profileimagelink,\n" +
            "\t\tadminid,lecturersurname, contracttype) \n" +
            "VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING * ", [
            req.body.lecturerid,
            req.body.lecturergivenname,
            req.body.phonenumber,
            req.body.dateofbirth,
            req.body.citizenship,
            req.body.sex,
            req.body.residenceaddress,
            req.body.password,
            req.body.email,
            req.body.profileimagelink,
            req.body.adminid,
            req.body.lecturersurname,
            req.body.contracttype


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newLecturer: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.post("/book", async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "book (bookid, booktitle,\n" +
            "\t\t librarianid,author,\n" +
            "\t\t releasedate,filelocation,price,quantity)\n" +
            "VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * ", [
            req.body.bookid,
            req.body.booktitle,
            req.body.librarianid,
            req.body.author,
            req.body.releasedate,
            req.body.filelocation,
            req.body.price,
            req.body.quantity


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newBook: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.post("/assessment", async (req, res) => {

    try{
        const result = await db.query("INSERT INTO \n" +
            "assessment (lecturerid,\n" +
            "\t\t unitcode,duedate,\n" +
            "\t\t status,assessmenttitle,locationlink,comment,academicyear)\n" +
            "VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * ", [
            req.body.lecturerid,
            req.body.unitcode,
            req.body.duedate,
            req.body.status,
            req.body.assessmenttitle,
            req.body.locationlink,
            req.body.comment,
            req.body.academicyear


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newAssessment: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

//THE DAY OF THE CLASS WILL NOT BE DIFFERENT. ONLY ONE CLASSDAY SET BY THE LECTURER
//THE TIME WILL BE DIFFERENT. CHOSEN BY THE STUDENT
app.post("/timetable", async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "timetable (unitcode, studentid,lecturerid,classtime,\n" +
            "\t\t semester,academicyear,classday)\n" +
            "VALUES ($1,$2,$3,$4,(select unit.semester from unit where unit.unitcode = $1)," +
            "$5,$6) RETURNING * ", [
            req.body.unitcode,
            req.body.studentid,
            req.body.lecturerid,
            req.body.classtime,
            req.body.academicyear,
            req.body.classday,



        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newTimetable: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.post("/onlineclass", async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "onlineclass (lecturerid, unitcode,\n" +
            "\t\t classday,classtime,\n" +
            "\t\t classlink,semester,academicyear)\n" +
            "VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ", [
            req.body.lecturerid,
            req.body.unitcode,
            req.body.classday,
            req.body.classtime,
            req.body.classlink,
            req.body.semester,
            req.body.academicyear


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newAssessment: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.post("/examtimetable",async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "exam_timetable (unitcode,lecturerid, examdate,\n" +
            "\t\t examtime,examvenue,adminid,\n" +
            "\t\t semester,academicyear)\n" +
            "VALUES ($1,$2,$3,$4,$5,$6,(select unit.semester from unit where unit.unitcode = $1),$8) RETURNING * ", [
            req.body.unitcode,
            req.body.lecturerid,
            req.body.examdate,
            req.body.examtime,
            req.body.examvenue,
            req.body.adminid,
            req.body.academicyear


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newAssessment: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

//I WILL KEEP THE UPDATING PROCESS VERY SIMPLE ASSUMING WE DO NOT NEED ANY ADUTING
//NORMALLY WITH UPDATE YOU CREATE TRIGGERS THAT WILL KEEP THE PREVIOUS DATA

app.put("/student/:id",async (req, res) => {
    try{
        const result = await db.query("UPDATE student \n" +
            "set studentid = $1, studentgivenname = $2,\n" +
            "\t\t phonenumber = $3,dateofbirth = $4,\n" +
            "\t\t citizenship = $5,sex = $6,residenceaddress = $7,\n" +
            "\t\t feestatus = $8 ,academicyear = $9,startingdate = $10,\n" +
            "\t\tpassword = $11, email = $12,academicstatus = $13,profileimagelink = $14,\n" +
            "\t\tadminid = $15,studentsurname = $16 WHERE student.studentid = $17 \n" +
            "RETURNING * ", [
            req.body.studentid,
            req.body.studentgivenname,
            req.body.phonenumber,
            req.body.dateofbirth,
            req.body.citizenship,
            req.body.sex,
            req.body.residenceaddress,
            req.body.feestatus,
            req.body.academicyear,
            req.body.startingdate,
            req.body.password,
            req.body.email,
            req.body.academicstatus,
            req.body.profileimagelink,
            req.body.adminid,
            req.body.studentsurname,
            req.params.id


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newStudent: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.put("/librarian/:id",async  (req, res) => {
    try{
        const result = await db.query("UPDATE librarian \n" +
            "set librarianid = $1, librariangivenname = $2,\n" +
            "\t\t phonenumber = $3,dateofbirth = $4,\n" +
            "\t\t citizenship = $5,sex = $6,residenceaddress = $7,\n" +
            "\t\tpassword = $8, email = $9,profileimagelink = $10,\n" +
            "\t\tadminid = $11,librariansurname = $12 WHERE librarian.librarianid = $13\n" +
            " RETURNING * ", [
            req.body.librarianid,
            req.body.librariangivenname,
            req.body.phonenumber,
            req.body.dateofbirth,
            req.body.citizenship,
            req.body.sex,
            req.body.residenceaddress,
            req.body.password,
            req.body.email,
            req.body.profileimagelink,
            req.body.adminid,
            req.body.librariansurname,
            req.params.id

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newLibrarian: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.put("/lecturer/:id",async (req, res) => {
    try{
        const result = await db.query("UPDATE lecturer \n" +
            "set lecturerid = $1, lecturergivenname = $2,\n" +
            "\t\t phonenumber = $3,dateofbirth = $4,\n" +
            "\t\t citizenship = $5,sex = $6,residenceaddress = $7,\n" +
            "\t\tpassword = $8, email =$9,profileimagelink = $10,\n" +
            "\t\tadminid = $11,lecturersurname = $12, contracttype = $13 \n" +
            "WHERE lecturer.lecturerid = $14 RETURNING * ", [
            req.body.lecturerid,
            req.body.lecturergivenname,
            req.body.phonenumber,
            req.body.dateofbirth,
            req.body.citizenship,
            req.body.sex,
            req.body.residenceaddress,
            req.body.password,
            req.body.email,
            req.body.profileimagelink,
            req.body.adminid,
            req.body.lecturersurname,
            req.body.contracttype,
            req.params.id

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newLecturer: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.put("/assessment/:lecturerid/:unitcode/:createdat", async (req, res) => {
    try{
        const result = await db.query("UPDATE assessment \n" +
            "set lecturerid = $1,\n" +
            "\t\t unitcode = $2,duedate =$3,\n" +
            "\t\t status =$4,assessmenttitle =$5,locationlink = $6,comment = $7\n" +
            "WHERE assessment.lecturerid = $8" +
            "AND assessment.unitcode= $9 AND assessment.createdat = $10 RETURNING * ", [
            req.body.lecturerid,
            req.body.unitcode,
            req.body.duedate,
            req.body.status,
            req.body.assessmenttitle,
            req.body.locationlink,
            req.body.comment,
            req.params.lecturerid,
            req.params.unitcode,
            req.params.createdat

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newAssessment: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.put("/timetable/:unitcode/:studentid/:academicyear", async (req, res) => {
    try{
        const result = await db.query("UPDATE timetable \n" +
            "set unitcode = $1, studentid = $2,lecturerid = $3,classtime = $4,\n" +
            "\t\t semester = (select unit.semester from unit where unit.unitcode = $1)," +
            "academicyear = $5,classday = $6 WHERE timetable.unitcode = $7 " +
            "AND timetable.studentid = $8 AND timetable.academicyear = $9\n" +
            "RETURNING * ", [
            req.body.unitcode,
            req.body.studentid,
            req.body.lecturerid,
            req.body.classtime,
            req.body.academicyear,
            req.body.classday,
            req.params.unitcode,
            req.params.studentid,
            req.params.academicyear



        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newTimetable: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.put("/onlineclass/:unitcode/:classday/:classtime/:semester", async (req, res) => {
    try{
        const result = await db.query("UPDATE onlineclass \n" +
            "set lecturerid = $1, unitcode =$2,\n" +
            "\t\t classday =$3,classtime =$4,\n" +
            "\t\t classlink =$5,semester = $6,academicyear = $7\n" +
            "WHERE onlineclass.unitcode = $8" +
            "AND onlineclass.classday =$9 AND onlineclass.classtime = $10" +
            "AND onlineclass.semester = $11 RETURNING * ", [
            req.body.lecturerid,
            req.body.unitcode,
            req.body.classday,
            req.body.classtime,
            req.body.classlink,
            req.body.semester,
            req.body.academicyear,
            req.params.unitcode,
            req.params.classday,
            req.params.classtime,
            req.params.semester,

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newAssessment: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.put("/examtimetable/:unitcode/:academicyear",async  (req, res) => {
    try{
        const result = await db.query("UPDATE exam_timetable \n" +
            "set unitcode = $1,lecturerid =$2, examdate =$3,\n" +
            "\t\t examtime =$4,examvenue =$5,adminid =$6,\n" +
            "\t\t semester =(select unit.semester from unit where unit.unitcode = $1),academicyear =$7\n" +
            "WHERE exam_timetable.unitcode = $8 AND exam_timetable.academicyear = $9 RETURNING * ", [
            req.body.unitcode,
            req.body.lecturerid,
            req.body.examdate,
            req.body.examtime,
            req.body.examvenue,
            req.body.adminid,
            req.body.academicyear,
            req.params.unitcode,
            req.params.academicyear,

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newAssessment: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

//updating marks and academic record
//done by admin and lecturer

//LECTURER ROUTE (SHOULD BE IN A LOOP) TO UPDATE STUDENT MARKS IN THE DATABASE
app.post("/grade",async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "student_grade (studentid, assessmentid,grade)\n" +
            "VALUES($1,$2,$3) RETURNING * ", [
            req.body.studentid,
            req.body.assessmentid,
            req.body.grade


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newStudent: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.put("/grade/:studentid/:assessmentid",async (req, res) => {
    try{
        const result = await db.query("UPDATE student_grade \n" +
            "set studentid = $1, assessmentid = $2,grade = $3\n" +
            "WHERE student_grade.studentid = $4 AND student_grade.assessmentid = $5 RETURNING * ", [
            req.body.studentid,
            req.body.assessmentid,
            req.body.grade,
            req.params.studentid,
            req.params.assessmentid


        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newStudent: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.post("/academicreport",async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "student_academicreport (unitcode, studentid,semestermark,exammark," +
            "academicyear,semester,yearlyreport)\n" +
            "VALUES($1,$2,(select sum(grade) from student_grade where student_grade.studentid = $2 AND student_grade.assessmentid like $1 || '%' || $4 || '%' ),$3,$4,$5,$6) RETURNING * ", [
            req.body.unitcode,
            req.body.studentid,
            req.body.exammark,
            req.body.academicyear,
            req.body.semester,
            req.body.yearlyreport

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newStudent: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.get("/academicreport/:studentid/:academicyear/:semester",async (req, res) => {
    try{
        const result = await db.query("SELECT student_academicreport.*, unit.unitname\n" +
            "from student_academicreport\n" +
            "LEFT JOIN unit\n" +
            "on student_academicreport.unitcode = unit.unitcode\n" +
            "where student_academicreport.studentid = $1\n" +
            "and student_academicreport.  = $2\n" +
            "and student_academicreport.semester = $3 ", [
            req.params.studentid,
            req.params.academicyear,
            req.params.semester

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newStudent: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
app.get("/availableunit/:studentid",async (req, res) => {
    try{
        const result = await db.query("select unit.*\n" +
            "from unit\n" +
            "left join student \n" +
            "on student.faculty = unit.faculty\n" +
            "where student.studentid = $1", [
            req.params.studentid

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newStudent: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});

app.post("/studentunit",async (req, res) => {
    try{
        const result = await db.query("INSERT INTO \n" +
            "student_unit (unitcode,studentid, semester,academicyear\n" +
            "VALUES ($1,$2,$3,$4) RETURNING * ", [
            req.body.unitcode,
            req.body.studentid,
            req.body.semester,
            req.body.academicyear

        ]);
        console.log(result)
        await res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                newAssessment: result.rows[0],
            }
        })

    }catch (err) {
        console.log(err)
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening on port ${port}...`)
});

#/myWhitboard

get the student timetable and the timetable table in postgres
display it in the dashboard

the student logs in and we query the timetable table
GET /timetable/:id/:semester/:timetableyear

#query to get student timetable
select student_unit.studentid, student_unit.unitCode, 
(select unit.unitname from unit where unit.unitCode = student_unit.unitCode) as UnitName, 
(select onlineclass.classdate from onlineclass where onlineclass.unitCode = student_unit.unitCode), 
(select onlineclass.classtime from onlineclass where onlineclass.unitCode = student_unit.unitCode)
from student_unit
where student_unit.studentid = '2850'

#/myWhitboard/moodle

you will show to student the units they are enrolled in
you will show to lecturer the unit they are teaching


#/myWhitboard/moodle/unit_ID

student will see contents uploaded by the lecturer
lecturer will be able to upload, delete, upload contents

#/myWhitboard/moodle/uunit_ID/online class

lecturer will be able to set and modify date and time for the online class
student will only be able to click on join the class 

#/myWhitboard/moodle/uunit_ID/assessment 

for student to submit their assessment 
lecturer will see the people who have submitted the work

#/myWhitboard/admin

#/myWhitboard/admin/ID

they will be displayed a page to find the person they want to help
or the unit they want to fix. the id will be of a book or student, lecturer or librarian. 
when the admin types the ID of the person they are searching the information will be display to them. 
#/myWhitboard/student

the admin will be able to add students manually

#/myWhitboard/lecturer

the admin will be able to add lecturers manually

#/myWhitboard/librarian

the admin will be able to add librarians manually

#/myWhitboard/units

the admin will be able to add units manually

#/myWhitboard/library

student will see the list of books available for them to read. 
librarian will also see the list of books with delete option. option to add books and/maybe update books or notes

#/myWhitboard/enroll

student will be able to select the unit they will enroll in. 
only unit under the IT department will be shown to them. 

#/myWhitboard/schedule

here the student will be able to schedule his timetable

#/myWhitboard/fee

this is where students can make payement, apply for scholarship, see their statement etc. 

#/myWhitboard/record

here the student can see its academic records

#/myWhitboard/exam.result

here the student will see the exam result after the exam period. this will also be part of the dashboard

#/myWhitboard/details

where the student can update information. 

Nodejs/Express route: GET, POST, PUT, DELETE

DATABASE: 
WHAT ARE WE GOING TO STORE IN THE DATABASE ? 
STUDENTS
LECTURERS
LIBRARIANS
UNITS






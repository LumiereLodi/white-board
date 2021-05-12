CREATE TABLE IF NOT EXISTS administrator(
    adminID TEXT PRIMARY KEY,
    adminName TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS librarian(
    librarianID TEXT PRIMARY KEY,
    librarianName TEXT,
    dateOfBirth DATE,
    residenceAddress TEXT,
    sex VARCHAR(1),
    phoneNumber TEXT,
    password TEXT,
    email TEXT,
    adminID TEXT,
    createdAt TIMESTAMP,

    FOREIGN KEY (adminID) REFERENCES administrator(adminID)

);

CREATE TABLE IF NOT EXISTS book (
    bookID TEXT,
    bookTitle TEXT,
    librarianID TEXT,
    author TEXT,
    releaseDate DATE,
    fileLocation TEXT,
    createdAt TIMESTAMP,

    FOREIGN KEY (librarianID) REFERENCES librarian (librarianID)


);

CREATE TABLE IF NOT EXISTS lecturer(
    lecturerID TEXT PRIMARY KEY,
    lecturerName TEXT,
    contractType TEXT,
    dateOfBirth DATE,
    adminID TEXT,
    phoneNumber TEXT,
    citizenship TEXT,
    sex VARCHAR (1),
    residenceAddress TEXT,
    password TEXT,
    email TEXT,
    createdAt TIMESTAMP,

    FOREIGN KEY (adminID) REFERENCES administrator (adminID)
);

CREATE TABLE IF NOT EXISTS student(
    studentID TEXT PRIMARY KEY,
    studentName TEXT,
    phoneNumber TEXT,
    dateOfBirth DATE,
    citizenship TEXT,
    sex VARCHAR (1),
    residenceAddress TEXT,
    feesStatus TEXT,
    academicYear TEXT,
    startingDate DATE,
    password TEXT,
    email TEXT,
    academicStatus TEXT,
    imageProfileLink TEXT,
    adminID TEXT,
    createdAt timestamp,

    FOREIGN KEY (adminID) REFERENCES administrator (adminID)

);

CREATE TABLE IF NOT EXISTS assessment(
    lecturerID TEXT NOT NULL,
    studentID TEXT NOT NULL,
	unitCode TEXT NOT NULL,
    createdAt TEXT DEFAULT TO_CHAR(NOW(), 'dd/mm/yyyy'),
    dueDate DATE,
    status TEXT,
    assessmentTitle TEXT,
    locationLink TEXT,
    grade INT,
    comment TEXT,

    PRIMARY KEY (lecturerID, studentID,createdAt,unitCode),

    FOREIGN KEY (lecturerID) REFERENCES lecturer (lecturerID),
    FOREIGN KEY (studentID) REFERENCES student (studentID),
	FOREIGN KEY (unitCode) REFERENCES unit (unitCode)

);

CREATE TABLE IF NOT EXISTS unit(
    unitCode TEXT NOT NULL UNIQUE,
    lecturerID TEXT NOT NULL,
    unitName TEXT,
    semester VARCHAR(1),
    adminID TEXT,
    createdAt timestamp,

    PRIMARY KEY (unitCode, lecturerID),

    FOREIGN KEY (lecturerID) REFERENCES lecturer (lecturerID),
    FOREIGN KEY (adminID) REFERENCES administrator (adminID)
);

/**SHOULD BE FILLED WITH A TRIGGER**/
CREATE TABLE IF NOT EXISTS student_unit(
    unitCode TEXT NOT NULL,
    studentID TEXT NOT NULL,
    lecturerID TEXT NOT NULL,

    PRIMARY KEY (unitCode, studentID),


    FOREIGN KEY (unitCode) REFERENCES unit (unitCode),
    FOREIGN KEY (studentID) REFERENCES student (studentID)

);

CREATE TABLE IF NOT EXISTS onlineClass(
    lecturerID TEXT NOT NULL,
    unitCode TEXT NOT NULL,
    classDay TEXT,
    classTime TEXT,
    classLink TEXT,
    semester VARCHAR(1),
    academicYear TEXT,
    createdAt TEXT DEFAULT TO_CHAR(NOW(), 'dd/mm/yyyy'),

    PRIMARY KEY (unitCode, lecturerID,classDay,classTime, semester, academicYear),

    FOREIGN KEY (unitCode) REFERENCES unit (unitCode),
    FOREIGN KEY (lecturerID) REFERENCES lecturer (lecturerID)
);



CREATE TABLE IF NOT EXISTS timetable(
    unitCode TEXT NOT NULL,
    studentID TEXT NOT NULL,
    lecturerID TEXT NOT NULL,
    classDate DATE,
    classTime TEXT,
    semester VARCHAR(1),
    academicYear TEXT,

    PRIMARY KEY (unitCode, studentID, lecturerID,academicYear),

    FOREIGN KEY (unitCode) REFERENCES unit (unitCode),
    FOREIGN KEY (lecturerID) REFERENCES lecturer (lecturerID),
    FOREIGN KEY (studentID) REFERENCES student (studentID)

);

CREATE TABLE IF NOT EXISTS student_academicReport(
    unitCode TEXT NOT NULL,
    studentID TEXT NOT NULL,
    lecturerID TEXT NOT NULL,
    semesterMark INT,
    examMark INT,
    finalGrade INT,
    academicYear TEXT,
    semester VARCHAR(1),
    YearlyReport TEXT,

    PRIMARY KEY (unitCode, studentID, lecturerID),

    FOREIGN KEY (unitCode) REFERENCES unit (unitCode),
    FOREIGN KEY (lecturerID) REFERENCES lecturer (lecturerID),
    FOREIGN KEY (studentID) REFERENCES student (studentID)
);

CREATE TABLE IF NOT EXISTS lecturer_studentAcademicReport(
    unitCode TEXT NOT NULL,
    studentID TEXT NOT NULL,
    lecturerID TEXT NOT NULL,
    finalGrade INT NOT NULL,
    reportYear TEXT,
    semester TEXT,

    PRIMARY KEY (unitCode, studentID, lecturerID),

    FOREIGN KEY (unitCode) REFERENCES unit (unitCode),
    FOREIGN KEY (lecturerID) REFERENCES lecturer (lecturerID),
    FOREIGN KEY (studentID) REFERENCES student (studentID)
);

/**SHOULD BE FILLED WITH A TRIGGER**/
CREATE TABLE IF NOT EXISTS academic_record(
    unitCode TEXT NOT NULL,
    studentID TEXT NOT NULL,
    finalMark INT,
    semester VARCHAR(1),
    academicYear TEXT,

    PRIMARY KEY (unitCode, studentID),

    FOREIGN KEY (unitCode) REFERENCES unit (unitCode),
    FOREIGN KEY (studentID) REFERENCES student (studentID)
);

CREATE TABLE IF NOT EXISTS exam_timetable(
    unitCode TEXT NOT NULL,
    lecturerID TEXT NOT NULL,
    examDate DATE,
    classTime TEXT,
    examVenue TEXT,
    adminID TEXT,
    semester VARCHAR(1),
    academicYear TEXT,

    createdAt TEXT DEFAULT TO_CHAR(NOW(), 'dd/mm/yyyy'),

    PRIMARY KEY (unitCode, lecturerID,academicYear),

    FOREIGN KEY (unitCode) REFERENCES unit (unitCode),
    FOREIGN KEY (lecturerID) REFERENCES lecturer (lecturerID)

);

CREATE TABLE category(
    categoryID VARCHAR(3) PRIMARY KEY,
    categoryName TEXT
);

CREATE TABLE bob(
    categoryID VARCHAR(3) PRIMARY KEY,
    categoryName TEXT
);




select * from onlineclasses

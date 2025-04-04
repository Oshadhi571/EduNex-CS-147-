require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Default MySQL user
    password: "", 
    database: "mydatabase", 
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

// Fetch all students
app.get("/users", (req, res) => {
    db.query("SELECT id, name, password, status FROM users", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Student
app.post("/users", (req, res) => {
    const { name, password, status } = req.body;
    const sql = "INSERT INTO users (name, password, status) VALUES (?, ?, ?)";
    db.query(sql, [name, password, status], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student added successfully", id: result.insertId });
        }
    });
});

// Update a Student
app.put("/users/:id", (req, res) => {
    const { name, password, status } = req.body;
    const sql = "UPDATE users SET name = ?, password = ?, status = ? WHERE id = ?";
    db.query(sql, [name, password, status, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student updated successfully" });
        }
    });
});

// Delete a Student
app.delete("/users/:id", (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student deleted successfully" });
        }
    });
});

// Toggle Student Status (Active/Inactive)
app.patch("/users/:id/status", (req, res) => {
    const { status } = req.body;
    const sql = "UPDATE users SET status = ? WHERE id = ?";
    db.query(sql, [status, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student status updated successfully" });
        }
    });
});

// Fetch all teachers
app.get("/teachers", (req, res) => {
    db.query("SELECT id, name, password FROM teachers", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Teacher
app.post("/teachers", (req, res) => {
    const { name, password } = req.body;
    const sql = "INSERT INTO teachers (name, password) VALUES (?, ?)";
    db.query(sql, [name, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Teacher added successfully", id: result.insertId });
        }
    });
});

// Delete a Teacher
app.delete("/teachers/:id", (req, res) => {
    const sql = "DELETE FROM teachers WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Teacher deleted successfully" });
        }
    });
});

// Fetch all parents
app.get("/parents", (req, res) => {
    db.query("SELECT id, name, password FROM parents", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Parent
app.post("/parents", (req, res) => {
    const { name, password } = req.body;
    const sql = "INSERT INTO parents (name, password) VALUES (?, ?)";
    db.query(sql, [name, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Parent added successfully", id: result.insertId });
        }
    });
});

// Delete a Parent
app.delete("/parents/:id", (req, res) => {
    const sql = "DELETE FROM parents WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Parent deleted successfully" });
        }
    });
});

// Fetch All Classes
app.get("/classes", (req, res) => {
    db.query("SELECT * FROM classes", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Class
app.post("/classes", (req, res) => {
    const { name, teacher, subject } = req.body;
    const sql = "INSERT INTO classes (name, teacher, subject) VALUES (?, ?, ?)";
    db.query(sql, [name, teacher, subject], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Class added successfully", id: result.insertId });
        }
    });
});

// Update a Class
app.put("/classes/:id", (req, res) => {
    const { name, teacher, subject } = req.body;
    const sql = "UPDATE classes SET name = ?, teacher = ?, subject = ? WHERE id = ?";
    db.query(sql, [name, teacher, subject, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Class updated successfully" });
        }
    });
});

// Delete a Class
app.delete("/classes/:id", (req, res) => {
    const sql = "DELETE FROM classes WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Class deleted successfully" });
        }
    });
});

app.get("/courses", (req, res) => {
    db.query("SELECT * FROM courses", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.post("/courses", (req, res) => {
    const { name, description } = req.body;
    const sql = "INSERT INTO courses (name, description, students) VALUES (?, ?, 0)";
    db.query(sql, [name, description], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course added successfully", id: result.insertId });
        }
    });
});

// Fetch All Courses (New Function)
app.get("/all-courses", (req, res) => {
    db.query("SELECT id, name, description FROM courses", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Course (students column defaults to 0)
app.post("/new-course", (req, res) => {
    const { name, description } = req.body;
    const sql = "INSERT INTO courses (name, description, students) VALUES (?, ?, 0)";
    db.query(sql, [name, description], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course added successfully", id: result.insertId });
        }
    });
});

// Update an Existing Course
app.put("/update-course/:id", (req, res) => {
    const { name, description } = req.body;
    const sql = "UPDATE courses SET name = ?, description = ? WHERE id = ?";
    db.query(sql, [name, description, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course updated successfully" });
        }
    });
});

// Delete a Course
app.delete("/remove-course/:id", (req, res) => {
    const sql = "DELETE FROM courses WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course deleted successfully" });
        }
    });
});
app.get("/assignments/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const sql = "SELECT * FROM assignments WHERE course_id = ?";
    db.query(sql, [courseId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});
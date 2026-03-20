# AICapstone



1. Title & Objective

Title:
Getting Started with Building an Employee Management REST API using Node.js and Express

Technology Chosen:

Node.js – JavaScript runtime for server-side applications

Express.js – Lightweight web framework for building APIs

MySQL – Relational database to store employee data

Why Chosen:
This project focuses on practical backend development skills, API design, and database management. It provides a hands-on learning experience suitable for beginners while also producing a functional system used in real-world HR applications.

End Goal:
To build a fully functional Employee Management REST API that allows users to:

Create, read, update, and delete employee records

Organize employees by department and role

Serve as a beginner-friendly toolkit demonstrating API development with AI prompts

2. Quick Summary of the Technology

What It Is:

Node.js: Server-side runtime environment for JavaScript

Express.js: Framework to simplify routing, middleware, and API building

MySQL: Database management system for storing relational data

Where It’s Used:

Web applications

HR and payroll systems

Internal company management tools

Real-World Example:

Employee databases in companies like Google, Amazon, or local HR platforms

3. System Requirements

OS: Linux / Mac / Windows

Code Editor: VS Code (or any preferred IDE)

Dependencies / Packages:

Node.js (v18+)

npm

MySQL (v8+)

Express.js (npm install express)

dotenv (npm install dotenv)

mysql2 (npm install mysql2)

Tools for Testing: Postman / Thunder Client

4. Installation & Setup Instructions

Step-by-Step Setup:

Clone the repository:

https://github.com/softQA254/AICapstone.git

Initialize Node.js project:

npm init -y

Install dependencies:

npm install express mysql2 dotenv

Create a .env file with database credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=employee_db
PORT=3000

Set up MySQL database:

CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    department_id INT,
    role_id INT,
    salary DECIMAL(10,2),
    FOREIGN KEY (department_id) REFERENCES departments(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

Run the server:

node index.js

Test endpoints via Postman:

GET /employees

POST /employees

PUT /employees/:id

DELETE /employees/:id

5. Minimal Working Example

Example: Simple Express server for testing connection

// index.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Employee Management API is running!');
});

app.listen(3000, () => console.log('Server running on port 3000'));

Expected Output:

Navigate to http://localhost:3000 → “Employee Management API is running!”

6. AI Prompt Journal

I'd like you to act as a senior backend developer. I'm building an Employee Management REST API using Node.js and Express, and I'm trying to understand the step byu step instructions on how i can create the API .
Here are the endpoints I've envisioned:

Endpoints:
POST /employees
GET /employees
GET /employees/:id
PUT /employees/:id
DELETE /employees/:id

Based on this, my current understanding is:

- The API allows CRUD operations for managing employees
- Each endpoint corresponds to a business action (create, view, update, delete)
- The system seems to separate concerns between routing and database logic

I'm confused about:

- How to structure controllers vs services
-The project structure
-Necessary files and what they will be used for
-Any initial setup

Could you:

1. Validate my understanding of REST API design
2. Explain how to setup the project


Then ask me 3-5 questions to test my understanding of API design decisions.


7. Common Issues & Fixes

Issue	Fix	Reference
Cannot connect to MySQL	Check credentials, start MySQL server	StackOverflow
Port already in use	Change PORT in .env or stop other processes	Postman forum

8. References

Node.js Documentation: https://nodejs.org/en/docs/

Express.js Guide: https://expressjs.com/en/starter/installing.html

MySQL Documentation: https://dev.mysql.com/doc/

Postman Learning Center: https://learning.postman.com/

Tutorials & Blog Posts:

https://www.freecodecamp.org/news/node-js-express-mysql-tutorial/

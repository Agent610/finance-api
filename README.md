# finance-api

Hello this is my Finance API BACKEND Project

This is a secure, BACKEND ONLY rest API objective is to track your personal finances.
Users can register, authenticate, create income and expense transactions, and retrieve financial summaries using aggregated analytics.

This project focuses sololy on backend engineering, API design, and data modeling using NODE.js, Express, and MongoDB.

Features

- Users authenticate their logins with JWT (jsonwebtoken).
- Secure password hashing using bcrypt.
- Create, read, update, and delete financial transactions.
- Categorize income and expenses.
- Monthly and yearly financial summaries.
- MongoDB aggregation pipelines for analytics.
- Modular, production-style project structure.
- Centralized error handling and middleware.

Tech Stacks

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- dotenv
- Joi/ ZOD (For request validation)
- Morgan (logging in and out)

Project structure and file information

Finance API (Main)
Subdirectories
-src ->

- config(Database configuration)
- controllers(Request handlers)
- middleware(Authentication & error handling middleware)
- models (Mongoose schemas)
- routes (API routes)
- utils(Helper functions)

-.gitignore

- app.js (Express app setup)
- server.js (Server entry point)

- package.json
- package-lock.json

- README.md

API

Auth
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and receive JWT |

Transactions (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/transactions` | Create a transaction |
| GET | `/transactions` | Get all user transactions |
| GET | `/transactions/:id` | Get single transaction |
| PUT | `/transactions/:id` | Update transaction |
| DELETE | `/transactions/:id` | Delete transaction |

Analytics
| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/summary/monthly` | Monthly financial summary |
| GET | `/summary/yearly` | Yearly financial summary |

---

Example Monthly Summary Response

```json
{
  "income": 5000,
  "expense": 3200,
  "balance": 1800,
  "categories": {
    "food": 500,
    "rent": 1200,
    "shopping": 400
  }
}

How to run the project

1. npm install
2. npm run dev
```

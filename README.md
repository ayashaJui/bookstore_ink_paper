<div align="center">

# 📚 Ink & Paper

### A modern online bookstore built with the MERN stack

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2c698d?style=for-the-badge&logo=render)](https://inkandpaper-frontend.onrender.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![MUI](https://img.shields.io/badge/Material%20UI-v5-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Swagger](https://img.shields.io/badge/API%20Docs-Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://inkandpaper-frontend.onrender.com/api-docs)

Browse books by genre, format, and author · Write and share blogs · Manage a cart and place orders · Full role-based admin dashboard

</div>

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)

---

## Features

<details>
<summary><b>🛒 Storefront & Shopping</b></summary>

- Filter books by genre, format, publisher, and author
- Homepage sections: Featured, Latest Releases, Popular Picks, On Sale
- Book detail pages with ratings, reviews, literary reviews, and rating distribution chart
- Multi-format books (hardcover, paperback, ebook) with per-format pricing
- Series support and bestseller flags
- Author profile pages with author-specific book listings
- Add to cart, update quantities, and checkout flow
- Shipping details and payment method selection (Paypal, Stripe, SSLCommerz, Bkash)
- Order history and detailed order view per user

</details>

<details>
<summary><b>✍️ Blogs</b></summary>

- Community blog system with categories and tags
- Like/unlike posts and individual comments
- Create, edit, and delete your own blog posts
- Manage all your blogs from your profile page
- Admin moderation — hide or unhide any post

</details>

<details>
<summary><b>👤 User Accounts</b></summary>

- Register and log in with JWT-based authentication
- Password visibility toggle on all auth forms
- Forgot password and reset password via email link
- Update profile info, address, and phone number
- Manage a personal favorites list
- Request account deletion

</details>

<details>
<summary><b>🛠️ Admin Dashboard</b></summary>

- Overview dashboard with store statistics
- Full CRUD for books, authors, users, and orders
- Create users directly from the admin panel and promote to admin
- Review management and customer message inbox
- Blog moderation with paginated tables throughout

</details>

<details>
<summary><b>⚡ UX & System</b></summary>

- Global toast notifications for all actions (success, error, info)
- Server-side input validation with descriptive error messages
- Image uploads for books and authors
- Responsive layout with Material UI
- Interactive API docs (Swagger UI) accessible from the site footer

</details>

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Redux + Thunk, React Router v6, Material UI v5, Axios, react-slick |
| **Backend** | Node.js, Express.js, express-validator, multer, nodemailer, swagger-ui-express |
| **Database** | MongoDB + Mongoose |
| **Auth** | JWT, bcryptjs |
| **Deployment** | Render |

---

## Getting Started

### Prerequisites

- Node.js >= 16
- MongoDB (local or [Atlas](https://www.mongodb.com/atlas))

### 1. Clone & Install

```bash
git clone https://github.com/ayashaJui/bookstore_ink_paper.git
cd bookstore_ink_paper

npm install                      # backend deps
npm install --prefix frontend    # frontend deps
```

### 2. Environment Variables

**Project root** — create `.env`:

```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000

# Email — required for forgot/reset password
EMAIL_HOST=your_smtp_host
EMAIL_PORT=your_smtp_port
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

**`frontend/`** — create `.env`:

```env
REACT_APP_BASE_URL=http://localhost:5000
```

### 3. Seed the Database

```bash
npm run data:import        # all data (books, authors, users, blogs)
npm run bookdata:import    # books only
npm run blogdata:import    # blogs only
npm run data:destroy       # wipe all seed data
```

### 4. Run the App

```bash
npm run dev        # starts backend + frontend together
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000 |
| Swagger Docs | http://localhost:5000/api-docs |

> To run separately: `npm run server` (backend only) or `npm run client` (frontend only)

---

## Project Structure

```
bookstore_ink_paper/
├── backend/
│   ├── config/         # DB connection
│   ├── controllers/    # Route handlers
│   ├── data/           # Seed data
│   ├── middleware/     # Auth, validation, error handling
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API route definitions
│   ├── utils/          # Token generation, email sending
│   ├── seeder.js       # DB seed / destroy script
│   ├── swagger.js      # OpenAPI 3.0 spec
│   └── server.js
└── frontend/
    └── src/
        ├── actions/    # Redux action creators
        ├── components/ # Reusable UI components
        ├── constants/  # Redux action type constants
        ├── helper/     # Utility functions
        ├── layouts/    # Navbar, Footer, shared wrappers
        ├── reducers/   # Redux reducers
        ├── screens/    # Page-level components
        └── store.js
```

---

## API Reference

Full interactive documentation is available via Swagger UI — use the **API Docs** button in the site footer, or open it directly:

| Environment | URL |
|---|---|
| Local | http://localhost:5000/api-docs |
| Production | https://inkandpaper-frontend.onrender.com/api-docs |

**Endpoints at a glance:**

| Resource | Base Path | Access |
|---|---|---|
| Auth | `/api/users/login`, `/api/users/forgotpassword` | Public |
| Users | `/api/users` | Public · Private · Admin |
| Books | `/api/books` | Public · Admin |
| Authors | `/api/authors` | Public · Admin |
| Blogs | `/api/blogs` | Public · Private · Admin |
| Orders | `/api/orders` | Private · Admin |
| Contact | `/api/contact` | Public · Admin |
| Uploads | `/api/upload` | Private · Admin |

> Protected routes require a `Bearer <token>` header. Obtain a token from `POST /api/users/login`. Use the **Authorize** button in Swagger UI to set it once for all requests.

---

<div align="center">

Developed by **Ayasha Hossain Jui** · [GitHub](https://github.com/ayashaJui/bookstore_ink_paper)

</div>

# Ink & Paper — Online Bookstore

A full-stack online bookstore built with the MERN stack. Browse books by genre, format, and author; write blogs; manage a cart and place orders — all backed by a role-based admin dashboard.

**Live Demo:** https://inkandpaper-frontend.onrender.com/

---

## Features

### Storefront
- Browse books with filters by genre, format, publisher, and author
- Sections for featured books, latest releases, popular picks, and sale items
- Book detail pages with user ratings, reviews, literary reviews, and rating distribution
- Multi-format books (e.g. hardcover, paperback, ebook) with per-format pricing
- Series support and bestseller flags
- Author profiles and author-specific book listings

### Shopping
- Add to cart, update quantities, and proceed to checkout
- Payment and order placement flow
- Order history and detailed order view per user

### Blogs
- Community blog system with categories and tags
- Like/unlike posts and comments
- Create and edit your own blog posts
- Admin moderation (hide/unhide posts)

### User Accounts
- Register and log in with JWT-based authentication
- Update profile, address, and phone number
- Manage a favorites list
- Request account deletion

### Admin Dashboard
- Overview dashboard with store statistics
- Full CRUD for books, authors, users, and orders
- Promote users to admin role
- Review management and customer message inbox
- Blog moderation

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, Redux + Thunk, React Router v6, Material UI v5, Axios, react-slick |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Auth | JWT, bcryptjs |
| Deployment | Render |

---

## Getting Started

### Prerequisites
- Node.js >= 16
- MongoDB instance (local or Atlas)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd bookstore_ink_paper

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

### Environment Variables

Create a `.env` file in the **project root**:

```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
```

Create a `.env` file in the **`frontend/` folder**:

```env
REACT_APP_BASE_URL=http://localhost:5000
```

### Seed the Database

To populate the database with sample books, authors, and users:

```bash
# From the project root
node backend/seeder.js
```

### Running the App

```bash
# Start the backend (from project root)
npm run dev

# Start the frontend (in a separate terminal)
cd frontend
npm start
```

The backend runs on `http://localhost:5000` and the frontend on `http://localhost:3000`.

---

## Project Structure

```
bookstore_ink_paper/
├── backend/
│   ├── config/         # Database connection
│   ├── controllers/    # Route handlers
│   ├── data/           # Seed data
│   ├── middleware/     # Auth, CORS, error handling
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── server.js
└── frontend/
    └── src/
        ├── actions/    # Redux action creators
        ├── components/ # Reusable UI components
        └── screens/    # Page-level components
```

---

## API Routes

| Resource | Base Path |
|---|---|
| Books | `/api/books` |
| Authors | `/api/authors` |
| Blogs | `/api/blogs` |
| Users | `/api/users` |
| Orders | `/api/orders` |
| Contact | `/api/contact` |
| Uploads | `/api/upload` |

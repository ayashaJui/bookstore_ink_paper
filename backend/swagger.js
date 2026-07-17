const swaggerSpec = {
  openapi: "3.0.3",
  info: {
    title: "Ink & Paper — Bookstore API",
    description:
      "REST API for the Ink & Paper online bookstore. All protected routes require a Bearer JWT token obtained from `POST /api/users/login` or `POST /api/users`.\n\n**Auth levels**\n- 🔓 Public — no token needed\n- 🔒 Private — valid user token\n- 🛡️ Admin — valid admin token",
    version: "1.0.0",
    contact: {
      name: "Ayasha Hossain Jui",
      url: "https://github.com/ayashaJui/bookstore_ink_paper",
    },
  },
  servers: [
    { url: "http://localhost:5000", description: "Local development" },
    { url: "https://inkandpaper-frontend.onrender.com", description: "Production" },
  ],
  tags: [
    { name: "Auth", description: "Register, login, password reset" },
    { name: "Users", description: "User profile and admin user management" },
    { name: "Books", description: "Book catalogue, ratings, and reviews" },
    { name: "Authors", description: "Author profiles" },
    { name: "Blogs", description: "Community blog posts and comments" },
    { name: "Orders", description: "Order placement and management" },
    { name: "Contact", description: "Customer contact messages" },
    { name: "Upload", description: "Image uploads" },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      Error: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
      AuthResponse: {
        type: "object",
        properties: {
          _id: { type: "string", example: "64a1f2c3b5e6d7890abcdef1" },
          name: { type: "string", example: "Jane Doe" },
          email: { type: "string", example: "jane@example.com" },
          isAdmin: { type: "boolean", example: false },
          token: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
        },
      },
      User: {
        type: "object",
        properties: {
          _id: { type: "string" },
          name: { type: "string" },
          email: { type: "string" },
          address: {
            type: "object",
            properties: {
              street: { type: "string" },
              city: { type: "string" },
              code: { type: "string" },
              country: { type: "string" },
            },
          },
          phone: { type: "string" },
          isAdmin: { type: "boolean" },
          isDeleted: { type: "boolean" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      Book: {
        type: "object",
        properties: {
          _id: { type: "string" },
          title: { type: "string", example: "The Great Gatsby" },
          isbn: { type: "string", example: "978-3-16-148410-0" },
          description: { type: "string" },
          author: { type: "array", items: { type: "string" }, description: "Author IDs" },
          genres: { type: "array", items: { type: "string" }, example: ["Fiction", "Classic"] },
          format: { type: "array", items: { type: "string" }, example: ["Hardcover", "Paperback"] },
          price: { type: "array", items: { type: "number" }, example: [24.99, 14.99] },
          countInStock: { type: "array", items: { type: "number" }, example: [10, 25] },
          publisher: { type: "string" },
          release: { type: "string", format: "date" },
          image: { type: "string" },
          pages: { type: "number" },
          offer: { type: "number", description: "Discount percentage (0 = no offer)" },
          isFeatured: { type: "boolean" },
          isBestSeller: { type: "boolean" },
          numCopySold: { type: "number" },
          avgRatings: { type: "number" },
          totalRatings: { type: "number" },
        },
      },
      Review: {
        type: "object",
        properties: {
          _id: { type: "string" },
          rating: { type: "number", minimum: 1, maximum: 5 },
          comment: { type: "string" },
          user: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      Author: {
        type: "object",
        properties: {
          _id: { type: "string" },
          name: { type: "string", example: "F. Scott Fitzgerald" },
          email: { type: "string" },
          description: { type: "string" },
          image: { type: "string" },
          dob: { type: "string", format: "date" },
          dod: { type: "string", format: "date" },
          website: { type: "string" },
          social: { type: "object" },
          totalBooks: { type: "number" },
        },
      },
      Blog: {
        type: "object",
        properties: {
          _id: { type: "string" },
          title: { type: "string" },
          description: { type: "string" },
          image: { type: "string" },
          categories: { type: "array", items: { type: "string" } },
          tags: { type: "array", items: { type: "string" } },
          books: { type: "array", items: { type: "string" } },
          likes: { type: "array", items: { type: "string" } },
          comments: {
            type: "array",
            items: {
              type: "object",
              properties: {
                _id: { type: "string" },
                details: { type: "string" },
                user: { type: "string" },
                likes: { type: "array", items: { type: "string" } },
              },
            },
          },
          isHidden: { type: "boolean" },
          user: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      Order: {
        type: "object",
        properties: {
          _id: { type: "string" },
          user: { type: "string" },
          orderItems: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                qty: { type: "number" },
                image: { type: "string" },
                price: { type: "number" },
                format: { type: "string" },
                book: { type: "string" },
              },
            },
          },
          shippingAddress: {
            type: "object",
            properties: {
              street: { type: "string" },
              city: { type: "string" },
              code: { type: "string" },
              country: { type: "string" },
            },
          },
          paymentMethod: { type: "string", example: "stripe" },
          itemsPrice: { type: "number" },
          shippingPrice: { type: "number" },
          taxPrice: { type: "number" },
          totalPrice: { type: "number" },
          isPaid: { type: "boolean" },
          paidAt: { type: "string", format: "date-time" },
          isDelivered: { type: "boolean" },
          deliveredAt: { type: "string", format: "date-time" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      PaginatedBooks: {
        type: "object",
        properties: {
          books: { type: "array", items: { $ref: "#/components/schemas/Book" } },
          page: { type: "number" },
          pages: { type: "number" },
          total: { type: "number" },
        },
      },
      PaginatedBlogs: {
        type: "object",
        properties: {
          blogs: { type: "array", items: { $ref: "#/components/schemas/Blog" } },
          page: { type: "number" },
          pages: { type: "number" },
          total: { type: "number" },
        },
      },
    },
  },

  paths: {
    // ─── AUTH ────────────────────────────────────────────────────────────────
    "/api/users/login": {
      post: {
        tags: ["Auth"],
        summary: "Login",
        description: "🔓 Authenticate with email and password. Returns a JWT token.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email", "password"],
                properties: {
                  email: { type: "string", format: "email", example: "jane@example.com" },
                  password: { type: "string", example: "secret123" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Login successful", content: { "application/json": { schema: { $ref: "#/components/schemas/AuthResponse" } } } },
          401: { description: "Invalid credentials", content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } } },
        },
      },
    },
    "/api/users/forgotpassword": {
      post: {
        tags: ["Auth"],
        summary: "Forgot password",
        description: "🔓 Sends a password reset link to the given email (expires in 30 min).",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email"],
                properties: { email: { type: "string", format: "email" } },
              },
            },
          },
        },
        responses: {
          200: { description: "Reset email sent", content: { "application/json": { schema: { type: "object", properties: { message: { type: "string", example: "Reset email sent" } } } } } },
          404: { description: "No account with that email" },
        },
      },
    },
    "/api/users/resetpassword/{token}": {
      put: {
        tags: ["Auth"],
        summary: "Reset password",
        description: "🔓 Set a new password using the token from the reset email.",
        parameters: [{ name: "token", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["password"],
                properties: { password: { type: "string", minLength: 6 } },
              },
            },
          },
        },
        responses: {
          200: { description: "Password reset successful" },
          400: { description: "Invalid or expired token" },
        },
      },
    },

    // ─── USERS ───────────────────────────────────────────────────────────────
    "/api/users": {
      post: {
        tags: ["Auth"],
        summary: "Register",
        description: "🔓 Create a new user account. Returns a JWT token.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "email", "password"],
                properties: {
                  name: { type: "string", example: "Jane Doe" },
                  email: { type: "string", format: "email", example: "jane@example.com" },
                  password: { type: "string", minLength: 6, example: "secret123" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Registration successful", content: { "application/json": { schema: { $ref: "#/components/schemas/AuthResponse" } } } },
          400: { description: "User already exists or invalid data" },
        },
      },
      get: {
        tags: ["Users"],
        summary: "Get all users",
        description: "🛡️ Admin only. Paginated list of all users.",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "page", in: "query", schema: { type: "integer", default: 1 } },
          { name: "limit", in: "query", schema: { type: "integer", default: 20 } },
        ],
        responses: {
          200: {
            description: "Paginated user list",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    users: { type: "array", items: { $ref: "#/components/schemas/User" } },
                    page: { type: "number" },
                    pages: { type: "number" },
                    total: { type: "number" },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/users/create": {
      post: {
        tags: ["Users"],
        summary: "Create user (admin)",
        description: "🛡️ Admin only. Create a user with full details.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "email", "password"],
                properties: {
                  name: { type: "string" },
                  email: { type: "string", format: "email" },
                  password: { type: "string" },
                  address: { type: "object", properties: { street: { type: "string" }, city: { type: "string" }, code: { type: "string" }, country: { type: "string" } } },
                  phone: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "User created", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } },
        },
      },
    },
    "/api/users/profile": {
      get: {
        tags: ["Users"],
        summary: "Get my profile",
        description: "🔒 Returns the logged-in user's profile.",
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "User profile", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } },
        },
      },
      put: {
        tags: ["Users"],
        summary: "Update my profile",
        description: "🔒 Update name, email, password, address, or phone.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  email: { type: "string", format: "email" },
                  password: { type: "string" },
                  address: { type: "object", properties: { street: { type: "string" }, city: { type: "string" }, code: { type: "string" }, country: { type: "string" } } },
                  phone: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Updated user with new token", content: { "application/json": { schema: { $ref: "#/components/schemas/AuthResponse" } } } },
        },
      },
    },
    "/api/users/{id}": {
      get: {
        tags: ["Users"],
        summary: "Get user by ID",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "User object", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } },
          404: { description: "User not found" },
        },
      },
      put: {
        tags: ["Users"],
        summary: "Update user by ID",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                  address: { type: "object" },
                  phone: { type: "string" },
                },
              },
            },
          },
        },
        responses: { 200: { description: "Updated user" } },
      },
      delete: {
        tags: ["Users"],
        summary: "Delete user",
        description: "🛡️ Admin only. Permanently deletes the user.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "User removed" },
          404: { description: "User not found" },
        },
      },
    },
    "/api/users/{id}/isAdmin": {
      put: {
        tags: ["Users"],
        summary: "Toggle admin role",
        description: "🛡️ Admin only. Flips the `isAdmin` flag on the target user.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Updated user" } },
      },
    },
    "/api/users/{id}/isDeleted": {
      put: {
        tags: ["Users"],
        summary: "Toggle account deletion",
        description: "🔒 Flip the `isDeleted` flag. Users can only toggle their own account; admins can toggle any.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Updated user" } },
      },
    },

    // ─── BOOKS ───────────────────────────────────────────────────────────────
    "/api/books": {
      get: {
        tags: ["Books"],
        summary: "Get all books",
        description: "🔓 Filterable, sortable, paginated book list.",
        parameters: [
          { name: "title", in: "query", description: "Search by title (case-insensitive)", schema: { type: "string" } },
          { name: "genre", in: "query", description: "Comma-separated genres, e.g. `Fiction,Classic`", schema: { type: "string" } },
          { name: "author", in: "query", description: "Author ID", schema: { type: "string" } },
          { name: "format", in: "query", description: "e.g. `Hardcover`", schema: { type: "string" } },
          { name: "publisher", in: "query", schema: { type: "string" } },
          { name: "price", in: "query", description: "Price range as `min,max` e.g. `10,50`", schema: { type: "string" } },
          { name: "rating", in: "query", description: "Minimum average rating", schema: { type: "number" } },
          { name: "offer", in: "query", description: "Pass any value to return only books with active offers", schema: { type: "string" } },
          { name: "sort", in: "query", description: "`release` (newest first) or `popular` (highest rated first)", schema: { type: "string", enum: ["release", "popular"] } },
          { name: "page", in: "query", schema: { type: "integer", default: 1 } },
          { name: "limit", in: "query", schema: { type: "integer", default: 15 } },
        ],
        responses: {
          200: { description: "Paginated books", content: { "application/json": { schema: { $ref: "#/components/schemas/PaginatedBooks" } } } },
        },
      },
      post: {
        tags: ["Books"],
        summary: "Create book",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["author", "isbn", "title", "description", "genres", "format", "price", "countInStock"],
                properties: {
                  author: { type: "array", items: { type: "string" }, description: "Author ID(s)" },
                  isbn: { type: "string" },
                  title: { type: "string" },
                  description: { type: "string" },
                  genres: { type: "array", items: { type: "string" } },
                  format: { type: "array", items: { type: "string" }, example: ["Hardcover", "Paperback"] },
                  price: { type: "array", items: { type: "number" }, example: [24.99, 14.99] },
                  countInStock: { type: "array", items: { type: "number" } },
                  publisher: { type: "string" },
                  release: { type: "string", format: "date" },
                  image: { type: "string" },
                  pages: { type: "number" },
                  offer: { type: "number", description: "Discount %" },
                  numCopySold: { type: "number" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Created book", content: { "application/json": { schema: { $ref: "#/components/schemas/Book" } } } },
        },
      },
    },
    "/api/books/genres": {
      get: { tags: ["Books"], summary: "Get all genres", description: "🔓", responses: { 200: { description: "Array of genre lists" } } },
    },
    "/api/books/formats": {
      get: { tags: ["Books"], summary: "Get all formats", description: "🔓", responses: { 200: { description: "Array of format lists" } } },
    },
    "/api/books/publishers": {
      get: { tags: ["Books"], summary: "Get all publishers", description: "🔓 Returns each publisher with book count.", responses: { 200: { description: "Array of { publisher, count }" } } },
    },
    "/api/books/authors": {
      get: { tags: ["Books"], summary: "Get authors with book count", description: "🔓", responses: { 200: { description: "Array of { _id, name, totalBooks }" } } },
    },
    "/api/books/latestRelease": {
      get: { tags: ["Books"], summary: "Latest releases", description: "🔓 Up to 8 most recently released books.", responses: { 200: { description: "Array of books" } } },
    },
    "/api/books/popular": {
      get: { tags: ["Books"], summary: "Popular books", description: "🔓 Top 7 books by average rating.", responses: { 200: { description: "Array of books" } } },
    },
    "/api/books/featured": {
      get: { tags: ["Books"], summary: "Featured books", description: "🔓 Books with `isFeatured: true`.", responses: { 200: { description: "Array of books" } } },
    },
    "/api/books/sale": {
      get: { tags: ["Books"], summary: "On-sale books", description: "🔓 Up to 4 books with an active offer.", responses: { 200: { description: "Array of books" } } },
    },
    "/api/books/orders": {
      get: { tags: ["Books"], summary: "Books with sale count", description: "🛡️ Admin only. All books with their total units sold.", security: [{ bearerAuth: [] }], responses: { 200: { description: "Array of books with saleCount" } } },
    },
    "/api/books/reviews": {
      get: { tags: ["Books"], summary: "All reviews", description: "🛡️ Admin only. Every review across all books.", security: [{ bearerAuth: [] }], responses: { 200: { description: "Array of { bookId, bookName, review }" } } },
    },
    "/api/books/{id}": {
      get: {
        tags: ["Books"],
        summary: "Get book by ID",
        description: "🔓 Full book detail with populated author, series, and reviews.",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Book object", content: { "application/json": { schema: { $ref: "#/components/schemas/Book" } } } },
          400: { description: "Book not found" },
        },
      },
      put: {
        tags: ["Books"],
        summary: "Update book",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/Book" } } } },
        responses: { 200: { description: "Updated book" } },
      },
      delete: {
        tags: ["Books"],
        summary: "Delete book",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Book removed" } },
      },
    },
    "/api/books/{id}/ratings": {
      get: {
        tags: ["Books"],
        summary: "Get avg rating",
        description: "🔓 Returns `{ totalRatings, avgRatings }` for a book.",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Rating summary", content: { "application/json": { schema: { type: "object", properties: { totalRatings: { type: "number" }, avgRatings: { type: "number" } } } } } } },
      },
      post: {
        tags: ["Books"],
        summary: "Add rating / review",
        description: "🔒 Submit a rating and optional comment for a book.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["rating"],
                properties: {
                  rating: { type: "number", minimum: 1, maximum: 5 },
                  comment: { type: "string" },
                },
              },
            },
          },
        },
        responses: { 201: { description: "Updated book with new review" } },
      },
    },
    "/api/books/{id}/ratings/{ratingId}": {
      delete: {
        tags: ["Books"],
        summary: "Delete own rating",
        description: "🔒 A user can only delete their own review.",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
          { name: "ratingId", in: "path", required: true, schema: { type: "string" } },
        ],
        responses: { 200: { description: "Updated book" }, 403: { description: "Not authorized" } },
      },
    },
    "/api/books/{id}/ratingsDistribution": {
      get: {
        tags: ["Books"],
        summary: "Rating distribution",
        description: "🔓 Returns count of each star rating (1–5) for a book.",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "e.g. `{ \"1\": 2, \"2\": 5, \"3\": 10, \"4\": 20, \"5\": 30 }`" } },
      },
    },

    // ─── AUTHORS ─────────────────────────────────────────────────────────────
    "/api/authors": {
      get: {
        tags: ["Authors"],
        summary: "Get all authors",
        description: "🔓 Returns all authors with total book count.",
        responses: { 200: { description: "Array of authors", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/Author" } } } } } },
      },
      post: {
        tags: ["Authors"],
        summary: "Create author",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name"],
                properties: {
                  name: { type: "string" },
                  email: { type: "string", format: "email" },
                  description: { type: "string" },
                  image: { type: "string" },
                  dob: { type: "string", format: "date" },
                  dod: { type: "string", format: "date" },
                  website: { type: "string" },
                  social: { type: "object" },
                },
              },
            },
          },
        },
        responses: { 200: { description: "Created author", content: { "application/json": { schema: { $ref: "#/components/schemas/Author" } } } } },
      },
    },
    "/api/authors/popular": {
      get: {
        tags: ["Authors"],
        summary: "Popular authors",
        description: "🔓 Top 8 authors by average book rating.",
        responses: { 200: { description: "Array of authors" } },
      },
    },
    "/api/authors/{id}": {
      get: {
        tags: ["Authors"],
        summary: "Get author by ID",
        description: "🔓 Full author detail with books, genres, and rating stats.",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Author with stats", content: { "application/json": { schema: { $ref: "#/components/schemas/Author" } } } } },
      },
      put: {
        tags: ["Authors"],
        summary: "Update author",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/Author" } } } },
        responses: { 200: { description: "Updated author" } },
      },
      delete: {
        tags: ["Authors"],
        summary: "Delete author",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Author removed" } },
      },
    },

    // ─── BLOGS ───────────────────────────────────────────────────────────────
    "/api/blogs": {
      get: {
        tags: ["Blogs"],
        summary: "Get all blogs",
        description: "🔓 Filterable, paginated. Pass `sort=latest` to get the 3 most recent posts (ignores pagination).",
        parameters: [
          { name: "category", in: "query", schema: { type: "string" } },
          { name: "tag", in: "query", schema: { type: "string" } },
          { name: "book", in: "query", description: "Book ID to filter by", schema: { type: "string" } },
          { name: "sort", in: "query", schema: { type: "string", enum: ["latest"] } },
          { name: "page", in: "query", schema: { type: "integer", default: 1 } },
          { name: "limit", in: "query", schema: { type: "integer", default: 10 } },
        ],
        responses: {
          200: { description: "Paginated blogs (or array of 3 when sort=latest)", content: { "application/json": { schema: { $ref: "#/components/schemas/PaginatedBlogs" } } } },
        },
      },
      post: {
        tags: ["Blogs"],
        summary: "Create blog post",
        description: "🔒",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["title", "description"],
                properties: {
                  title: { type: "string" },
                  description: { type: "string" },
                  image: { type: "string" },
                  categories: { type: "array", items: { type: "string" } },
                  tags: { type: "array", items: { type: "string" } },
                  books: { type: "array", items: { type: "string" }, description: "Related book IDs" },
                },
              },
            },
          },
        },
        responses: { 200: { description: "Created blog", content: { "application/json": { schema: { $ref: "#/components/schemas/Blog" } } } } },
      },
    },
    "/api/blogs/categories": {
      get: { tags: ["Blogs"], summary: "Get all categories", description: "🔓", responses: { 200: { description: "Array of category lists" } } },
    },
    "/api/blogs/tags": {
      get: { tags: ["Blogs"], summary: "Get all tags", description: "🔓", responses: { 200: { description: "Array of tag lists" } } },
    },
    "/api/blogs/myblogs": {
      get: {
        tags: ["Blogs"],
        summary: "Get my blogs",
        description: "🔒 Returns all blogs authored by the logged-in user.",
        security: [{ bearerAuth: [] }],
        responses: { 200: { description: "{ count, blogs }" } },
      },
    },
    "/api/blogs/{id}": {
      get: {
        tags: ["Blogs"],
        summary: "Get blog by ID",
        description: "🔓 Full blog with populated user, comments, and related books.",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Blog object", content: { "application/json": { schema: { $ref: "#/components/schemas/Blog" } } } } },
      },
      put: {
        tags: ["Blogs"],
        summary: "Update blog",
        description: "🔒 Only the blog's author can update it.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/Blog" } } } },
        responses: { 200: { description: "Updated blog" }, 404: { description: "Blog not found" } },
      },
      delete: {
        tags: ["Blogs"],
        summary: "Delete blog",
        description: "🔒 Only the blog's author can delete it.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Blog removed" } },
      },
    },
    "/api/blogs/{id}/isHidden": {
      put: {
        tags: ["Blogs"],
        summary: "Toggle blog visibility",
        description: "🛡️ Admin only. Flips `isHidden` to hide/show a post.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Updated blog" } },
      },
    },
    "/api/blogs/{id}/like": {
      post: {
        tags: ["Blogs"],
        summary: "Like / unlike blog",
        description: "🔒 Toggles the like on a blog post.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "{ message: 'Blog liked' | 'Blog unliked' }" } },
      },
    },
    "/api/blogs/{id}/comment": {
      post: {
        tags: ["Blogs"],
        summary: "Add comment",
        description: "🔒",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { type: "object", required: ["details"], properties: { details: { type: "string" } } },
            },
          },
        },
        responses: { 201: { description: "Updated blog with new comment" } },
      },
    },
    "/api/blogs/{id}/comment/{commentId}": {
      put: {
        tags: ["Blogs"],
        summary: "Update comment",
        description: "🔒 Only the comment's author can update.",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
          { name: "commentId", in: "path", required: true, schema: { type: "string" } },
        ],
        requestBody: { required: true, content: { "application/json": { schema: { type: "object", required: ["details"], properties: { details: { type: "string" } } } } } },
        responses: { 200: { description: "Updated blog" }, 403: { description: "Not the comment owner" } },
      },
      delete: {
        tags: ["Blogs"],
        summary: "Delete comment",
        description: "🔒 Comment owner or admin can delete.",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
          { name: "commentId", in: "path", required: true, schema: { type: "string" } },
        ],
        responses: { 200: { description: "Updated blog" }, 403: { description: "Not owner or admin" } },
      },
    },
    "/api/blogs/{id}/comment/{commentId}/like": {
      post: {
        tags: ["Blogs"],
        summary: "Like / unlike comment",
        description: "🔒 Toggles the like on a specific comment.",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
          { name: "commentId", in: "path", required: true, schema: { type: "string" } },
        ],
        responses: { 200: { description: "Updated blog" } },
      },
    },

    // ─── ORDERS ──────────────────────────────────────────────────────────────
    "/api/orders": {
      post: {
        tags: ["Orders"],
        summary: "Place an order",
        description: "🔒 Creates a new order and decrements `countInStock` for each item.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["orderItems", "shippingAddress", "paymentMethod", "itemsPrice", "shippingPrice", "taxPrice", "totalPrice"],
                properties: {
                  orderItems: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string" },
                        qty: { type: "number" },
                        image: { type: "string" },
                        price: { type: "number" },
                        format: { type: "string" },
                        book: { type: "string", description: "Book ID" },
                      },
                    },
                  },
                  shippingAddress: {
                    type: "object",
                    properties: { street: { type: "string" }, city: { type: "string" }, code: { type: "string" }, country: { type: "string" } },
                  },
                  paymentMethod: { type: "string", example: "stripe" },
                  itemsPrice: { type: "number" },
                  shippingPrice: { type: "number" },
                  taxPrice: { type: "number" },
                  totalPrice: { type: "number" },
                },
              },
            },
          },
        },
        responses: { 201: { description: "Created order", content: { "application/json": { schema: { $ref: "#/components/schemas/Order" } } } } },
      },
      get: {
        tags: ["Orders"],
        summary: "Get all orders",
        description: "🛡️ Admin only. All orders sorted by newest first.",
        security: [{ bearerAuth: [] }],
        responses: { 200: { description: "Array of orders", content: { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/Order" } } } } } },
      },
    },
    "/api/orders/myorders": {
      get: {
        tags: ["Orders"],
        summary: "Get my orders",
        description: "🔒 All orders placed by the logged-in user.",
        security: [{ bearerAuth: [] }],
        responses: { 200: { description: "{ count, orders }" } },
      },
    },
    "/api/orders/customers": {
      get: {
        tags: ["Orders"],
        summary: "Customers who ordered",
        description: "🛡️ Admin only. Grouped by user with spend totals.",
        security: [{ bearerAuth: [] }],
        responses: { 200: { description: "Array of customers with orders and spend stats" } },
      },
    },
    "/api/orders/{id}": {
      get: {
        tags: ["Orders"],
        summary: "Get order by ID",
        description: "🔒",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Order object", content: { "application/json": { schema: { $ref: "#/components/schemas/Order" } } } } },
      },
      delete: {
        tags: ["Orders"],
        summary: "Delete order",
        description: "🔒 Only unpaid and undelivered orders can be deleted. Stock is restored automatically.",
        security: [{ bearerAuth: [] }],
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
        responses: {
          200: { description: "Order removed or `{ message: 'Can not delete this order' }` if paid/delivered" },
          404: { description: "Order not found" },
        },
      },
    },

    // ─── CONTACT ─────────────────────────────────────────────────────────────
    "/api/contact": {
      post: {
        tags: ["Contact"],
        summary: "Send a message",
        description: "🔓 Public contact form. All fields are validated server-side.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "email", "subject", "message"],
                properties: {
                  name: { type: "string" },
                  email: { type: "string", format: "email" },
                  subject: { type: "string" },
                  message: { type: "string", minLength: 10 },
                },
              },
            },
          },
        },
        responses: { 200: { description: "Message submitted" } },
      },
      get: {
        tags: ["Contact"],
        summary: "Get all messages",
        description: "🛡️ Admin only.",
        security: [{ bearerAuth: [] }],
        responses: { 200: { description: "Array of contact messages" } },
      },
    },

    // ─── UPLOAD ──────────────────────────────────────────────────────────────
    "/api/upload/book": {
      post: {
        tags: ["Upload"],
        summary: "Upload book image",
        description: "🛡️ Admin only. Accepts JPG/JPEG/PNG. Returns the file path.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: { "multipart/form-data": { schema: { type: "object", properties: { image: { type: "string", format: "binary" } } } } },
        },
        responses: { 200: { description: "File path string, e.g. `/uploads/books/image-1234567890.jpg`" } },
      },
    },
    "/api/upload/author": {
      post: {
        tags: ["Upload"],
        summary: "Upload author image",
        description: "🛡️ Admin only. Accepts JPG/JPEG/PNG.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: { "multipart/form-data": { schema: { type: "object", properties: { image: { type: "string", format: "binary" } } } } },
        },
        responses: { 200: { description: "File path string" } },
      },
    },
    "/api/upload/blog": {
      post: {
        tags: ["Upload"],
        summary: "Upload blog image",
        description: "🔒 Accepts JPG/JPEG/PNG.",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: { "multipart/form-data": { schema: { type: "object", properties: { image: { type: "string", format: "binary" } } } } },
        },
        responses: { 200: { description: "File path string" } },
      },
    },
  },
};

export default swaggerSpec;

# TODO — Ink & Paper

---

## Feature Relevance Review

### Reviews — Keep, fully relevant
Book reviews are a core feature of any bookstore (Amazon, Goodreads). They are directly tied to a specific book, feed into the rating and sorting system, and help users decide what to buy. Tightly integrated and adds real value.

### Blogs — Feels disconnected, needs integration
The blog system works as a standalone social platform (likes, comment likes, categories, tags) sitting next to the bookstore, but it is not connected to the book catalog at all.

**Why it feels forced:**
- Any user can write a blog about anything — no link to a specific book
- No "write a blog about this book" flow from the book detail page
- Feels like a generic blog engine dropped into the app

**How to make it feel natural:**
- Allow tagging a blog post with specific books from the catalog
- Show related blog posts on a book's detail page
- This one connection would tie both features together meaningfully

---

## Implementation Backlog

### Critical — Core functionality is broken without these

- [ ] **Payment gateway integration (SSLCommerz / Stripe)**
  Currently the payment screen collects a method choice but never processes anything. `isPaid` stays `false` permanently. The entire purchase flow is incomplete without this. SSLCommerz for local (Bangladesh), Stripe for international.

- [ ] **Pay button for customer + lock order after payment**
  After placing an order, the customer needs a button to actually complete payment. Once paid, the order must be locked — deletion should not be allowed.

- [ ] **Transaction history**
  Every payment attempt and result needs to be recorded. Essential for disputes, refunds, and audit trails. Should be built alongside the payment gateway.

- [ ] **Cash on delivery (COD) option**
  COD is extremely common in markets like Bangladesh where many customers don't use cards. Without it, a large portion of potential customers can't complete a purchase.

---

### Important — Needed for real-world use

- [ ] **Processing fee + tax percentage on order total**
  Orders currently show a flat `totalPrice` with no tax or processing fee. Real orders need to reflect actual costs before the customer confirms payment.

- [ ] **COD status indicator in admin**
  Admin needs to distinguish COD orders from prepaid ones at a glance. Add a status badge on the order list and detail views.

- [ ] **Redesign delivery status column + allow admin to update it**
  The current delivery chip in the dashboard is display-only with no reliable update flow. Admin should be able to mark an order as delivered directly from the order list or detail page.

- [ ] **Remove cart and favorites buttons from admin view**
  Admin accounts see customer-facing UI (cart, favorites) that makes no sense for them. These should be hidden when `isAdmin` is true.

---

### Good to have — Improves engagement and UX

- [ ] **Let customers follow authors**
  A follow system on author profiles allows readers to stay connected with authors they like. This also unlocks the personalized dashboard feature below.

- [ ] **User dashboard: show new books and articles from followed authors**
  Once author following is in place, the user's dashboard can surface recently added books and blog posts from authors they follow. Adds real value for returning users.

- [ ] **Admin real-time notifications (socket.io)**
  Admins should get instant alerts for new orders and incoming contact messages instead of having to manually refresh. Implement with socket.io.

---

### Cleanup

- [ ] **Remove "Manage Article" from admin sidebar**
  Given that the blog feature feels disconnected from the bookstore, removing it from the admin panel reduces clutter. Reconsider if blogs are better integrated with the book catalog later.

- [ ] **Blog: show who liked on hover / popup**
  On blog detail page, hovering the like count shows names of users who liked the post or a comment. Nice social touch, low effort.

---

### UI Polish

- [ ] **Footer social media links**
  Add real social media links to the footer. Standard for any professional site.

- [ ] **About page — team / member section**
  Add member info to the About page. Good for portfolio presentation.

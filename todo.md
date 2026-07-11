# TODO — Ink & Paper

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

### Bugs / Broken things

- [ ] **`isFeatured` and `isBestSeller` not manageable from admin UI**
  Both fields exist on the Book model and are used on the frontend (featured section, bestseller badge), but the AddEditBook form has no toggle for them. Admin has no way to set or change these flags.

- [ ] **Messages missing from admin sidebar**
  The `/admin/messages` route and screen exist and work, but there is no link to it in the admin sidebar (`ListItems.jsx`). Admin can only reach it by typing the URL directly.

- [ ] **Debug `console.log` left in UserProfile**
  `UserProfile.jsx:174` — `console.log("delete")` is left inside the account deletion handler. Should be removed before production.

---

### Important — Needed for real-world use

- [ ] **Processing fee + tax percentage on order total**
  Orders currently show a flat `totalPrice` with no tax or processing fee. Real orders need to reflect actual costs before the customer confirms payment.

- [ ] **COD status indicator in admin**
  Admin needs to distinguish COD orders from prepaid ones at a glance. Add a status badge on the order list and detail views.

- [ ] **Redesign delivery status column + allow admin to update it**
  The current delivery chip in the dashboard is display-only with no reliable update flow. Admin should be able to mark an order as delivered directly from the order list or detail page.

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

- [ ] **Blog: show who liked on hover / popup**
  On blog detail page, hovering the like count shows names of users who liked the post or a comment. Nice social touch, low effort.

---

### UI Polish

- [ ] **Footer social media links**
  Add real social media links to the footer. Standard for any professional site.

- [ ] **About page — team / member section**
  Add member info to the About page. Good for portfolio presentation.

---


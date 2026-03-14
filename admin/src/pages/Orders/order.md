This third component is your **Orders management page**. It lets the admin view all customer orders and update their status. Let’s break it down:

---

### 🔹 Imports
- **React, useEffect, useState** → Core React hooks.
- **"./Orders.css"** → Styles for the component.
- **toast** → For notifications.
- **assets** → Contains static assets (like the parcel icon).
- **axios** → For API requests.

---

### 🔹 State
- **orders** → Holds the list of all orders fetched from the backend.

---

### 🔹 Functions
1. **fetchAllOrders**
   - Calls `GET ${url}/api/order/list`.
   - If successful, updates `orders` with the data.
   - If not, shows an error toast.

2. **statusHandler**
   - Triggered when the admin changes the order status from the dropdown.
   - Sends a `POST` request to `${url}/api/order/status` with:
     ```js
     {
       orderId,
       status: event.target.value
     }
     ```
   - If successful, refreshes the order list by calling `fetchAllOrders()` again.

---

### 🔹 useEffect
- Runs `fetchAllOrders()` once when the component mounts.
- Ensures orders are loaded immediately.

---

### 🔹 JSX Structure
- **Wrapper (`<div className='order add'>`)**
  - Contains the order list.

- **Order List**
  - Loops through `orders` using `map`.
  - For each order:
    - Shows a parcel icon.
    - Displays ordered items (`item.name x item.quantity`).
    - Shows customer name (`firstName lastName`).
    - Shows full address (street, city, state, country, zipcode).
    - Shows phone number.
    - Displays:
      - Number of items.
      - Total amount.
      - A **status dropdown** with options:
        - Food Processing
        - Out for delivery
        - Delivered
      - Dropdown is bound to `order.status` and updates via `statusHandler`.

---

### 🔹 Flow of Usage
1. Component loads → `fetchAllOrders()` runs → orders are displayed.
2. Admin sees all details (items, customer info, address, amount).
3. Admin changes order status via dropdown.
4. Backend updates status → list refreshes → UI shows updated status.

---

👉 In short:  
This component is an **Order Management Dashboard**. It fetches all customer orders, displays them with full details, and allows the admin to update their status (processing → delivery → delivered). It complements your **Add** and **List** components, forming a complete admin panel for managing food items and customer orders.

---



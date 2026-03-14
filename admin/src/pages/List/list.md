This second component is designed to **list all food items** and allow the admin to remove them. Let’s walk through it:

---

### 🔹 Imports
- **React, useEffect, useState** → Core React hooks for state and lifecycle.
- **"./List.css"** → Styles for the component.
- **axios** → For HTTP requests.
- **toast** → For showing success/error notifications.

---

### 🔹 State
- **list** → Holds the array of food items fetched from the backend.

---

### 🔹 Functions
1. **fetchList**
   - Calls `GET ${url}/api/food/list`.
   - If successful, updates `list` with the data from the backend.
   - If not, shows an error toast.

2. **removeFood**
   - Calls `POST ${url}/api/food/remove` with the food item’s ID.
   - After removing, it refreshes the list by calling `fetchList()` again.
   - Shows success or error toast depending on response.

---

### 🔹 useEffect
- Runs `fetchList()` once when the component mounts.
- Ensures the food list is loaded immediately.

---

### 🔹 JSX Structure
- **Wrapper (`<div className="list add flex-col">`)**
  - Contains the table of food items.

- **Table Header**
  - Displays column titles: Image, Name, Category, Price, Action.

- **Table Rows**
  - Loops through `list` using `map`.
  - For each item:
    - Shows image (`${url}/images/` + item.image).
    - Shows name, category, and price.
    - Shows an **X button** (styled as clickable text) that removes the item when clicked.

---

### 🔹 Flow of Usage
1. Component loads → `fetchList()` runs → food items are displayed.
2. Admin clicks **X** → `removeFood()` sends request to backend.
3. Backend removes item → list refreshes → toast shows success/error.

---


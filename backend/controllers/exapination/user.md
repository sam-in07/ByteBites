This controller handles **user authentication** (login and registration) with password hashing and JWT tokens. Let’s break it down:

---

### 🔹 Imports
- **userModel** → Mongoose schema for users.
- **jwt** → For generating authentication tokens.
- **bcrypt** → For hashing and comparing passwords securely.
- **validator** → For validating email format.

---

### 🔹 Functions

#### 1. **loginUser**
- Extracts `email` and `password` from request body.
- Finds user by email in MongoDB.
- If user doesn’t exist → returns error.
- Compares entered password with hashed password in DB using `bcrypt.compare`.
- If match → generates JWT token with `createToken(user._id)` and returns success.
- If not match → returns "Invalid password".

```js
const isMatch = await bcrypt.compare(password, user.password);
```

---

#### 2. **createToken**
- Helper function that signs a JWT with the user’s ID.
- Uses `process.env.JWT_SECRET` as the secret key.
- Token is returned to frontend for authentication.

```js
return jwt.sign({ id }, process.env.JWT_SECRET);
```

---

#### 3. **registerUser**
- Extracts `name`, `email`, `password` from request body.
- Checks if user already exists (`findOne({ email })`).
- Validates email format with `validator.isEmail`.
- Validates password length (must be ≥ 8 characters).
- Hashes password with `bcrypt.genSalt` and `bcrypt.hash`.
- Creates new user with hashed password and saves to DB.
- Generates JWT token for the new user.
- Returns success response with token.

---

### 🔹 Flow of Usage
1. **Frontend Register Form** → calls `registerUser` → new user created, token returned.
2. **Frontend Login Form** → calls `loginUser` → verifies credentials, token returned.
3. **Frontend stores token** (usually in localStorage or cookies).
4. **Authenticated requests** → token is sent in headers → backend verifies JWT.

---

### 🔹 Key Points
- **Security**:
  - Passwords are hashed before saving (never stored in plain text).
  - JWT tokens are used for authentication.
- **Validation**:
  - Email format checked.
  - Password length enforced.
- **Error Handling**:
  - Returns JSON with `success: false` and descriptive messages.

---

👉 In short:  
This controller provides **secure login and registration** for your app. It ensures passwords are hashed, emails are validated, and users receive JWT tokens for authentication. This is the foundation of your **user authentication system**.

Would you like me to also show you how to **set up middleware to protect routes using JWT** so only logged-in users can access cart, orders, etc.?

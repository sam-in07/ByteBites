Here’s a clear breakdown of the two React Hooks you asked about:

---

## 🔹 `useState`
- **What it is**: A React Hook that lets you add **state** (data that changes over time) to a functional component.
- **Syntax**:
  ```jsx
  const [state, setState] = useState(initialValue);
  ```
  - `state`: the current value.
  - `setState`: a function to update that value.
  - `initialValue`: the starting value (e.g., `0`, `""`, `false`, or an object).
- **Example**:
  ```jsx
  const [count, setCount] = useState(0);

  <button onClick={() => setCount(count + 1)}>Increase</button>
  ```
  → Every click updates `count`, and React re-renders the component with the new value.

---

## 🔹 `useContext`
- **What it is**: A React Hook that lets you read values from a **Context**.  
  Context is React’s way of sharing data globally without passing props down through every level (avoiding “prop drilling”).
- **Syntax**:
  ```jsx
  const value = useContext(MyContext);
  ```
  - `MyContext`: created with `React.createContext()`.
  - `value`: whatever the `Provider` supplies (could be state, functions, or objects).
- **Example**:
  ```jsx
  const ThemeContext = React.createContext("light");

  function MyComponent() {
    const theme = useContext(ThemeContext);
    return <p>Current theme: {theme}</p>;
  }
  ```
  → If the provider sets `ThemeContext.Provider value="dark"`, then `theme` will be `"dark"`.

---

## ⚡ Key Difference
| Hook        | Purpose | Example Use Case |
|-------------|---------|------------------|
| **useState** | Manages local state inside a single component | A counter, form input, toggle button |
| **useContext** | Consumes shared/global state from a Context Provider | Theme, authentication, cart data |

---

👉 Think of `useState` as **local memory for one component**, while `useContext` is **shared memory across many components**.  




## 1. Imports at the top

```js
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
```

* **React** → needed to create a React component.
* **ExploreMenu.css** → styling for this component.
* **menu_list** → an array of menu data (probably objects with `menu_name` and `menu_image`) coming from your assets folder.

Example of what `menu_list` likely looks like:

```js
[
  { menu_name: "Pizza", menu_image: "pizza.png" },
  { menu_name: "Burger", menu_image: "burger.png" }
]
```

---

## 2. Component definition

```js
const ExploreMenu = ({category, setCategory}) => {
```

This is a **functional component** called `ExploreMenu`.

It receives **props**:

* `category` → the currently selected category (e.g. `"Pizza"` or `"All"`)
* `setCategory` → a function to update the selected category (probably from `useState` in a parent component)

So this component **does not manage state itself** — it controls state passed from the parent.

---

## 3. Main JSX return

```js
return (
  <div className='explore-menu' id='explore-menu'>
```

* Wraps everything in a `div`
* `className` → for CSS styling
* `id` → useful for navigation or scrolling

---

## 4. Heading and description

```js
<h1>Explore our menu</h1>

<p className='explore-menu-text'>
  Choose from a diverse menu featuring a delectable array of dishes...
</p>
```

Just static text content:

* Title
* Description paragraph styled with CSS

---

## 5. Rendering the menu list (important part 🔥)

```js
<p className='explore-menu-list'>
  {menu_list.map((item,index)=>{
```

* You loop through `menu_list` using `.map()`
* For **each menu item**, you create UI dynamically
* `item` → current menu object
* `index` → array index (used as `key`)

---

## 6. Clickable menu item

```js
<div
  onClick={() =>
    setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)
  }
  key={index}
  className='explore-menu-list-item'
>
```

### What happens on click?

```js
setCategory(prev =>
  prev === item.menu_name ? "All" : item.menu_name
)
```

This means:

* If you click the **same category again**, it resets to `"All"`
* If you click a **different category**, it sets that category

✅ This is a toggle behavior

Example:

* Current category: `"Pizza"`
* Click `"Pizza"` → category becomes `"All"`
* Click `"Burger"` → category becomes `"Burger"`

---

## 7. Image with active class

```js
<img
  className={category === item.menu_name ? "active" : ""}
  src={item.menu_image}
  alt=''
/>
```

* Shows the menu image
* Adds the `"active"` CSS class **only if** this item is selected
* This is usually used to highlight the selected category (border, scale, etc.)

---

## 8. Menu name text

```js
<p>{item.menu_name}</p>
```

Displays the category name below the image.

---

## 9. Divider line

```js
<hr></hr>
```

Just a horizontal line for visual separation.

---

## 10. Exporting the component

```js
export default ExploreMenu
```

This allows other files to import and use `<ExploreMenu />`.

---

## Big picture summary 🧠

This component:

* Displays a list of food categories
* Highlights the currently selected category
* Lets users **toggle categories on click**
* Sends the selected category back to the parent via `setCategory`

In short:
👉 **UI for filtering menu items by category**


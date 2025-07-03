# HTML Semantics

## Document Structure

### `<html>`
- It is the foundation of a website.
- It is called the root container since it holds everything together.
- Every webpage has to use it.

### `<head>`
- Every single page has to use it.
- Contains metadata, links to stylesheets, page title, etc.

### `<body>`
- Used to show all the visible contents.
- Everything that we desire for our user to see is given inside this tag.
- Can add classes, IDs, event handlers, background styles, etc.

---

## Page Layout

### `<header>`
- Used for site headers, article headers or section introductions.
- It catches the eyes of the user, making it easier to know on which page they are on right now.

### `<nav>`
- Used to navigate the users into a particular area of the webpage.
- Like if they want to directly go to the contact section of the webpage, they can click on the text "CONTACT" and it will guide to the contact section.

**Example:**
```html
<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

### `<main>`
- The primary space where the main action happens.

**Example:**
```html
<main>
  <h2>Welcome to My Blog</h2>
  <p>This is the latest article on tech news and tutorials.</p>
</main>
```

### `<aside>`
- Like a small space set to show related articles, sidebars, author bios.
- It won't be a necessary thing to show but it will be related to the main content.

### `<footer>`
- Contains the practical stuff like contact info, legal links, site maps.

---

## Content Sections

### `<article>`
- Used for blog posts, news articles, product reviews.
- When we use this tag, the search engines consider this as a standalone content worth indexing.

**Example:**
```html
<article>
  <h2>5 Tips for Learning HTML</h2>
  <p>Start with the basics and build up slowly...</p>
</article>
```

### `<section>`
- Used to group related content together.
- Chapters in an article, different topics on a page, etc., can be included inside a section.

**Example:**
```html
<section>
  <h2>Our Services</h2>
  <p>We offer web design, development, and marketing services.</p>
</section>
```

### `<div>`
- It is used when no other semantic tag fits for a particular content.
- By using `div`, we can group that content and later add styles to it as a whole since they belong inside a particular tag.

---

## Content Elements

### `<h1>` - `<h6>`
- Used to create content hierarchy.
- Used to show headings in different sizes.
- The bigger it is, the more important the content under that heading.

### `<p>`
- Used to show sentences grouped together like a letter.
- If we want to write something like a letter, we can use the `<p>` tag.

### `<ul>`, `<ol>`, `<li>`
- `<ul>` is used to list items in bullet points.
- `<ol>` is used to list items in numbers.
- `<li>` represents each list item.

---

## Interactive Elements

### `<button>`
- Actual clickable buttons that can be assigned to do something.
- Used in form submission, triggering JavaScript actions, or any clickable tasks.

### `<form>`
- Used to gather input from the users.

### `<a>`
- Anchor tag used to redirect the user into an actual running website or a webpage that we made.

**Example:**
```html
<a href="https://google.com">Google here</a>
```

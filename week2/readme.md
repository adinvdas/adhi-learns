## What is HTML ?
HTML semantics

Document Structure
<html>
It is the foundation of a website.
It is called the root container since it holds everything together
Every webpage has to use it

<head>
Every single page has to use it
Contains metadata, links to stylesheets, page title etc.

<body>
Used to show all the visible contents. Everything that we desire for our user to see is given inside this tag.
Can add classes, ID, Event handlers, background styles etc.

Page Layout
<header>

used for site headers, article headers or section introductions.
It catches the eyes of the user, making it easier to know on which page they are on right now.

<nav>
Used to navigate the users into a particular area of the webpage

Like if they want to directly go to the contact section of the webpage they can click on the text "CONTACT" and it will guide to the contact section

 Example<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
  </nav>

<main> 
The primary space where the main action happens.

Example:
<main>
  <h2>Welcome to My Blog</h2>
  <p>This is the latest article on tech news and tutorials.</p>
</main>

<aside>
Like a small space set to show related articles, sidebars, author bios. It won't be a necessary thing to show but it will be related to the main content.

<footer>
Contains the practical stuffs like contact info, legal links, site maps.

Content Sections

<article>
Used to blog posts, New articles, Product Reviews. When we use this tag the search engines consider this as a standalone content worth indexing.

Example:
<article>
  <h2>5 Tips for Learning HTML</h2>
  <p>Start with the basics and build up slowly...</p>
</article>


<section>
Used to group related content together. Chapters in an articles, Different topics on a page etc can be included inside a section.

Example:
<section>
  <h2>Our Services</h2>
  <p>We offer web design, development, and marketing services.</p>
</section>

<div>
it is used when no other semantics fits for a particular content. By using dev we can group that content and later add some styles to it in a whole since they belong inside a particular tag.

Content Elements
<h1> - <h6>
To create Content hierarchy. Used to show heading in different sizes. The bigger it the more important is the content under that heading

<p>
Used to show a sentences grouped together like a letter. If we want to write something like a letter we can use the <p> tag to do that.

<ul><ol><li>
UL is used to list items in bullet points.
OL in Numbers 

Interactive Elements

<button>
Actual clickable buttons that can be assigned to do something 
Used in form submission, triggering JS actions or any clickable actions.

<form>
Is the normal forms that are used to gather input from the users.

<a> 
anchor tag is used to redirect the user into an actual running website or a webpage that we made.
Example:
<a href"google.com"> Google here </a>



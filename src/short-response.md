# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector("#my-button").style.color = "red";
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**

1. This is a `TypeError` because although the value of `document.querySelector('#my-button')` is null.

2. Since the `HTML` above references `index.js` before the `button` with an `id` of `my-button` is created after and `javascript` goes line by line.

3. Put the `script` tag that references index.js after the body tag and before the footer tag (after any elements being created).

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id="button-container">
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector("#button-container");
div.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**

`event.target` would log button while `event.currentTarget` would log div. This is because `event.target` refers to the element that was clicked on while `event.currentTarget` refers to the element the event listener was added to.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: "iPhone 17",
  price: 1099.99,
  img: "./images/iphone17.png",
};

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement("div");
const productImage = document.createElement("img");
const productName = document.createElement("h3");
const productPrice = document.createElement("p");

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**
The issue is that `productImage`, `productName`, and `productPrice` aren't being appended into the `productCard` first, this means the `productCard` being appended into the body contains no elements.

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class="description">Walk the dog</p>
    <p class="is-complete">✅</p>
  </li>
  <li id="todo-2">
    <p class="description">Take out the trash</p>
    <p class="is-complete">❌</p>
  </li>
  <li id="todo-3">
    <p class="description">Wash the dishes</p>
    <p class="is-complete">❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector("#todo-list");
todoList.addEventListener("click", (event) => {
  const clickedLi = event.target.closest("li");

  if (!clickedLi) return;

  clickedLi.querySelector(".is-complete").textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**

1. `Event Delegation` is the name and it's the better approach because the alternative is to hand each `li` individually which would mean more event listeners.
2. `event.target.closest('li')` means we're targeting the closest `li` child that was involved when we clicked the parent element.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**

1. `querySelector()` is when we select one specific element. `querySelectorAll()` is when we want to select multiple children elements inside of a parent element, this creates a `NodeList`.

2. The differences between a `NodeList` and an array are that, arrays contain more methods (NodeList only contains 'forEach'), NodeLists are slower and less efficient than an array, and arrays are Live and Mutable which means changing elements inside a variable that references an array, the original array will change while for the same situation with a NodeList, the original NodeList will not reflect any changes made to the variable.

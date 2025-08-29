
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 

  **getElementById** is use for selecting single and unique element.But **getElementsByClassName** finds and selects all the elements that has the exact same class. On the other hand   **querySelector** is same as **querySelectorAll**. The only Differance is **querySelector** and **querySelectorAll** is **querySelector** only selects the first CSS Selectors through ID, Class, tag names etc. But **querySelectorAll** selects all the CSS Selectors through ID, Class, tag names etc


2. How do you **create and insert a new element into the DOM**?

Answer: 

To Create and insert a new element into the DOM, First we need to create the element 
*document.createElement("tagName")*. After that we can add content or attributes to it using *.textContent, .innerHTML, .setAttribute()* etc. and then we can use *.appendChild* method to insert it to the DOM.


3. What is **Event Bubbling** and how does it work?
Answer:
**Event Bubbling** is an event that works inside the DOM and when we click it runs and bubbles up to its parents, then grandparents, so on until it rechees to it root element.

How it works-
  1. get activated by user click
  2. then the event is handled by its child element
  3. then its bubbling to its parent, then grandparents, so on until it rechees to it root element.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: 
**Event Delegation**
Instead of adding a click listener to many buttons, we add one listener to its parent. and then When a button is clicked or any event happends, the event bubbling to its parent. this is how **Event Delegation** works

Why is it useful?
it helps to write clean code, easy to manage any time , gives better performance and works dymanicaly.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
**preventDefault()**
1. Stops the default actions or events of any element to happen.
2. And this Does not stop the event of bubbling.

**stopPropagation()**
1. Stops the event from bubbling up to its root elements.
2.it does not prevent the element to its default action.


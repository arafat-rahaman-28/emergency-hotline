1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   ANSWER: **getElementById()** selects an element with an unique id (attribute), **getElementByClassName()** selects elements by the given class to them. **querySelector()** provides the first element from the document and **querySelectorAll()** provides the static NodeList from the document.

2. How do you create and insert a new element into the DOM?
   ANSWER: To create a new element we have to use the **createElement()** and then use **appendChild()** to insert it into the DOM.

3. What is Event Bubbling and how does it work?
   ANSWER: Event bubling is a default behaviour of JavaScript where when an event is triggered it spreads throughout the whole DOM Tree to the root.

4. What is Event Delegation in JavaScript? Why is it useful?
   ANSWER: Event delegation in JavaScript is a technique where we can add single event listeneer to an element instead of adding multiple listeners to each of it's children elements. And then the parent elements delegates the the event to the correct child when needed. And this is usefull because it helps us to write cleaner code and it is more efficient.

5. What is the difference between preventDefault() and stopPropagation() methods?
   ANSWER: **preventDefault()** prevents the default actions of an element. For example a form being submitting when the button is being clicked. and **stopPropogation()** prevents the event bubbling up to the parent elements.

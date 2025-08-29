Question 1:- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :- getElementById only selects one element by its unique ID. getElementsByClassName selects elements by their class name. querySelector only selects the first element that matches any CSS selector.
Question 2:- How do you create and insert a new element into the DOM?
Ans :- By using a document.createElement() along with methods like .append(), .prepend(), or .insertBefore().
Question 3:- What is Event Bubbling, and how does it work?
Ans :- It describes how events move/work through the DOM.
Question 4:- What is Event Delegation in JavaScript? Why is it useful?
Ans :- It is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements. Then, you detect which child triggered the event using event.target. It handles dynamic elements, has less code, improves performance, etc.
Question 5:- What is the difference between preventDefault() and stopPropagation() methods?
Ans :- preventDefault() stops the default browser action for an event.stopPropagation() stops the event from bubbling up the DOM tree.

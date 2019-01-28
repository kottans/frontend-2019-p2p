# How to Conduct A Helpful Code Review

Consider following links:
- [How to Do Code Reviews Like a Human (Part One)](https://mtlynch.io/human-code-reviews-1/) /
  [Code review по-человечески (часть 1)](https://habr.com/en/post/340550/)
- [How to Do Code Reviews Like a Human (Part Two)](https://mtlynch.io/human-code-reviews-2/) /
  [Code review по-человечески (часть 2)](https://habr.com/ru/post/342244/)

## Formatting, Style, Manual Testing

### Pull-request template
PRs should have proper name (as per task name), should contain link to working demo (if applicable) and to code. Advise your peer to fix or complete missing parts.

### User interface testing
- Make sure to test the demo properly
- Please check that all interactive elements are visually indicated (by changing cursor form, background etc.) 

### Code formatting
- `console.log` statements should not be left in final version of the code, unless it's part of the functionality
- Please advise your peer to fix irregular indentations and remove redundant empty lines.
- Please advise your peer to put newline at the end of every file.
- Unnecessary comments should be avoided. Advise your peer to find a way to express their intent through expressive variable names or by abstracting part of the code into properly named function.
- Magic numbers are [bad](https://stackoverflow.com/questions/47882/what-is-a-magic-number-and-why-is-it-bad)

### Code style

- Variable name should be camelCase:  
```javascript
//Before:  
let my_var, myothervar;

// After:
let myVar, myOtherVar;
```
- Variable names should not be too short or too  obscure:
```javascript
//Before: 
let fns, a, b, cont;

// After:
let functionsList, card, rootElement, content;
```

- Variable names should not be too general.
```javascript
//Before: 
let arr, str;

// After:
let cardsList, cardTitle;
```

- If-statement: multiple conditions can often be combined in one condition:
```javascript
//Before: 
if (a) return;
if (b) return;

// After:
if (a || b) return;
```

- Magic numbers in code should be avoided. For details see [this link](https://stackoverflow.com/questions/47882/what-is-a-magic-number-and-why-is-it-bad).

### DRY, KISS, SOLID  
Please read carefully about [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [KISS](https://en.wikipedia.org/wiki/KISS_principle), [SOLID](https://en.wikipedia.org/wiki/SOLID), [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) principles and help your peers to find possibilities to apply them.

### JavaScritp Features  
1. `for` loops, `forEach`, `map` & other iterative forms  
Please pay attention to the content of loop body or callback. Frequent mistake is to make some operation in every iteration, which can be done only once outside loop.

1. `forEach` or `map`? Rule of thumb: if you are using the result of iteration, namely newly created array, use map. if you only need the side-effect of iteration, use forEach. `forEach` says "we don't use the result".

1. Read about the following Array methods on MDN and try to find opportunities to use them:
    - `Array.prototype.find`
    - `Array.prototype.concat`
    - `Array.prototype.includes`
    - `Array.prototype.join`

1. Array function body with brackets & return statement where it is not necessary
    ```javascript
    // Before
    myArray.map(item => { return item.name });

    // After
    myArray.map(item => item.name);
    ```

1. Creating global variables by accident should be avoided. Variables should be always declared with let/const keywords:

    ```javascript
    // Before
    handleClick = (e) => { /* doSomething */ }

    // After
    const handleClick = (e) => { /* doSomething */ }
    ```
1. Missing `“use strict”` directive increases risk of unexpected behavior (except for ES6 modules).

1. Promises & asynchronicity
    - not returning promises
    - using `async`/`await` where Promise is enough

1. Encourage your peers to use more ES6 features  
    - `let`/`const` instead of `var`
    - Destructuring
        ```javascript
        // Before
        `element.addEventListener(‘click’, (e) => { const target = e.target ;  /* do something */})`

        // After
        `element.addEventListener(‘click’, ({ target }) => {  /* do something */})`
        ```
    - Arrow functions for callbacks and other small functions
    - Template literals (especially for string concatenation)

Read more: 
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- ["Exploring ES6"](http://exploringjs.com/es6/)
- ["We have a Problem With Promises"](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)


### DOM API
#### event delegation

#### DOM manipulation in loops. 
Adding elements to DOM from a loop is a bad practice. A browser will run reflow and repaint for every element in the loop. Instead, you can: 
  1. Use `append` method, which can add several elements in one operation 
  2. Create some wrapper, add your items to the wrapper and then add it to DOM. It will be one operation. 
  3. Clone current container. Add items to a container and then replace your old container with a new one. But be aware of event listeners.
  4. Use `innerHTML` instead
  
#### Use of `event` global variable instead event handler argument (fails in FireFox)

#### Relying on DOM structure
Don't use constructions like `children[0]`, `firstElementChild`, `parentNode`, `nextSibling`, etc. In such way, you rely on the order of DOM elements. So in case when you will have changed design - your code will be broken. Which is bad, obviously. Use `querySelector` or `closest`, if in event, instead.

#### Changing styles with JS
Don't use inline style changing - `element.style`. In most cases this is a bad approach for several reasons: 
  1. First of all, a browser will apply such styling for each line separately/ Which means, that every such line of code will be a reason for running of calculations of a page and for drawing it,  so you can receive a performance problem. Read about reflow and repaint.  
  2. This is an imperative way, you need to write declarative and describe what your code does, not how. This will make your code shorter and easier to maintain. 
  3. Reuse of code. Saying, you will need to rotate some other stuff - you will add a similar line to another part of an application. Which is not right because of DRY. 
  - Separation of responsibility - JS for logic, CSS - for styling. 
  
  So, replace such parts classes. You can use `classList` to manipulate them.

#### Handling changes
`keyUp` handles not all input types (try pasting text via context menu instead of typing)

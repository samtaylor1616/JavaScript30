## Take Home Lessons:

### 01 - Drum Kit

- HTML **data-** attribute
  - Used to store custom data private to the page
- Keyboard
  - kbd element
  - http://keycode.info/ is great for identifying which key code is needed for what key
- Sounds
  - To be able to press a button multiple times and hear it restart we need to reset the audio currentTime back to 0
- QuerySelector
  - Same approach as CSS
  - Returns a node list -> which looks like an array but has functions eg. map, reduce
  - document.querySelector(`audio[data-key="${event.keyCode}"]`)
  - document.querySelector(`.key[data-key="${event.keyCode}"]`)
- Event listeners
  - Must iterate through each item and attach its own listener
  - You can't just attach a listener to the list
- CSS
  - Transition property

--

### 02 - Clock

- CSS
  - transform: rotate(330deg) rotates the object in the middle
    - We want to rotate the hands on the clock for the right end of the object
    - Update the transform origin
    - `Element.style.property = ''` resets the styling back to the original CSS stylesheet

### 03 - CSS Variables & Modifying at Runtime

- CSS
  - You now can have variables in css
  - Use --varname to use (standard to be backwards compatable)
  - **dataset** is an object you don't have to use an attribute selector
    - It takes any property that has **data-** on the element and put it into an object

### 04 - Array Cardio Day 1

- Console
  - Instead of using console.log you can use console.table to show a formatted array
- Filter
  - You only need to return true, nothing is falsy
- Map
  - Returns you the same length array your iterated over
- Reduce
  - `arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])`
  - obj[someKey]

### 05 - Flex Panels Image Gallery

- Toggle
  - Instead of adding and removing a property use the toggle `this.classList.toggle`
- Flexbox
- nth-child selector
  - .panel p:nth-child(2)

### 06 - Population: Ajax Type Ahead

- Regex:
  - new Regex(wordToMatch, 'gi')
  - Flags:
    - g stands for global, looks in the entire string
    - i is case incensitive
- Input boxes
  - .value to get the text input
- Events
  - Change event only runs once a user clicks off of the input field
  - That is why we needed to include the _keyup_ event
- InnerHTML
  - ulElement.innerHTML = `li element string of formatted HTML`

### 07 - Array Cardio Day 2

- Array.prototype.some()
  - Checks that at least one element in the array meets your requirement
- Array.prototype.every()
  - Checks that at every single element in the array meets your requirement
- Array.prototype.find()
  - Similar to filter but instead just returns the first element you match
- Array.prototype.findIndex()
  - Find the index of the first element you match
  - eg. `const index = comments.findIndex(comment => comment.id === 823423);`
- Console.log if you put console.log({isAdult}) it will print the the variable name and the value
- Two ways to delete an element from an array with the index
  - `array.splice(index, 1);`
  - `const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)]`

### 08 - HTML5 Canvas

- You get a block of pixels and draw on the context
  - Context can either be 2D or 3D
- ES6 ~ Destructing an array -> set multiple variables in one line
  - `[lastX, lastY] = [event.offsetX, event.offsetY];`
- https://mothereffinghsl.com/ hsl()
  - Rainbow
  - H -> Hue
  - S -> Saturation
  - L -> Lightness
- Blend modes
  - ctx.globalCompositeOperation
  - Different types of blends https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
- mouseout event
  - When the mouse moves off the window

### 09 - Dev Tool Tricks

- Using onClick=someFunction() is equalivant to setting up event listener
- Finding where the javascript is running that is causing changes
  - Inspect the element that is changing
  - Right click -> break on -> attribute modifications
  - When you cause the modification to occur it will pause and show a debuger console
  - When finished you can uncheck the attribute modifications break point
- Console
  - Interpolated
    - Pass in values to to print
    - Now in ES6 we use backticks `'some string ${blah}'`
  - Styled
    - If you put `%c` in front of your output, then you can apply any CSS to it
  - Warning & Error
    - Also provides a stack trace of where it got called
  - Assert
    - Used for testing
    - It will only run if the assertion is wrong
  - Clear
    - Refreshes the console
  - Viewing DOM elements
    - console.dir(some js element) will give you the drop down of all the methods
    - Console.log will only show you the actual element itself
  - Group
    - Use console.group or groupCollapsed with groupEnd to contain multiple console logs
    - Naming the groups make it easier to see which information belongs where
  - Count
    - Counts how many times that element has appeared
  - Time
    - Counts how long something takes
    - console.time(label);
    - console.timeEnd(label);

### 10 - Hold Shift to Check Multiple Checkboxes

- event.shiftKey is true if the shift key is being pressed

### 11 - Custome HTML5 Video Player

- Video has a boolean valued paused and two functions -> play and pause
- To update a buttons display use its textContent
- Use parseFloat to convert a string to a number value
- Responsive sliders
  - Use event listeners on both the change and mousemove events
- Attributes
  - With our ranges we named the HTML elements their associated attributes they were updating so we could simply go `video[this.name] = this.value;`
- Updating the progress bar of the video
  - Use timeupdate event or progress to call the update method rather than a timer to call your function every second
  - When it is paused then it won't unnecessarily be calling your update function
- Clicking and dragging
  - Instead of `progress.addEventListener('mousemove', scrub);`
  - Use a mousedown flag to make the target function only run after the user has clicked down, not just when they hover over the element

### 12 - Key Sequence Detection (KONAMI CODE)

- Splice vs Slice
  - splice() returns the removed items in an array
  - slice() returns the selected elements in an array, as a new array
  - Splice changes the original array
  - Slice doesn't change the original array
- Splice
  - Just like python use -negative values to work from the right to left
- Use str.length to get the length of a string
- Convert an array to a string
  - myArray.join('')
- String.prototype.includes()
  - Determines if one string is found within another
  - `sentence.includes(word)`

### 13 - Slide In on Scroll

- With scrolling it fires the event a lot. It is too much to call an event every time this event is fired
  - Use a **debounce function** to limit the amount of times we call the function
- Optional parameters
  - `function debounce(func, wait = 20, immediate = true {}`
- Window
  - window.scrollY gives how many pixels down we are using the top of the browser as a reference
  - use window.scrollY- window.innerHeight to give us where we are in the page referencing the bottom

### 14 - Objects and Arrays

- Strings, numbers, booleans
  - Passed by value - if you change the original the it will **not** update the other ones
- Arrays, objects
  - Passed by reference - when you update any reference to the array the value reference by all the arrays is updated
- Copying arrays
  1. `arr2 = arr1.slice()`
  2. `arr3 = [].concat(arr1);` take an empty array and concatinate it
  3. `arr4 = [...arr1];` using the new ES6 spread
- Copying objects
  1. `const cap2 = Object.assign({}, person, {number: 99, age: 12 });`
  - the {} starts a new empty object
  - person is the object we want to copy from
  - the next object is other fields we want to add in or update
  2. `const cap3 = {...person};` object ...spread
  3. `const dev2 = JSON.parse(JSON.stringify(sam));`
- Note: Arrays and objects copies are shallow -> it is only 1 level deep
  - lodash has a cloneDeep method but check that you actually need to do that because it is very rare that you need to copy that deep

### 15 - LocalStorage and Event Delegation

- Submit event
  - Instead of using the on click event use on submit so if a used submits a form and presses enter your event listener picks up on it
- Form
  - Submit/refresh the page by default -> `event.preventDefault()`
  - Clear a form once submitted -> `this.reset` where this is the form
- Map()
  - ``plates.map((plate, ii) => ...` where ii is the curent index
- Checkbox
  - Can't use the checked attribute as `checked=false`
  - Instead if it it checked you add the attribute `checked`
  - Otherwise you leave it blank
- localStorage
  - Object in the browser
  - Contains a list of things that have been saved in the current domain
  - `localStorage.setItem(key, value)`, `localStorage.getItem()`, `localStorage.removeItem()`
  - It looks like an object, **however it is only a key, value store where you can only use strings**
    - To convert your objects and arrays use `JSON.stringify()`
    - When retreiving these objects and arrays you can use `JSON.parse()` to reverse it
- Try and get it from local storage, if it isn't there fallback to an empty array
  - `const items = JSON.parse(localStorage.getItem('items')) || [];`
- Inputs that are creating after we listen to them don't actually have those event listeners attached
  - Solution: Event Delegation
  - Rather than listening for a click on change on the text boxes directly, we can look for something that already exists on the page eg. the **ul** that contains our list elements
    - Listen for a click on the ul and then figure out if they clicked on the checkbox inside of it
  - Basically the parent listens for the event and then passes the event onto the children to respond to
  - We check if the event is for the target we wanted in the toggleDown function
    - `if (!e.target.matches('input')) return;`
- Every time we make a change we mirror that to local storage and then rerender the list

### 16 - CSS Text Shadow Mouse Move Effect

- Content Editable
  - `<h1 contenteditable="">🔥WOAH!</h1>`
  - Makes the html page editable
- ES6 Destructoring:
  - This `const width = hero.offsetWidth; const height = hero.offsetHeight;`
  - Is equalivant to `const { offsetWidth: width, offsetHeight: height } = hero;`
    - hero.offsetWidth, hero.offsetHeight
- Position of your cursor on an element
  - Cursor is at event.offsetWidth, event.offsetHeight
  - However if you have nested items inside of the element then you have to normalise it

### 17 - Sorting Band Names Without Articles

- Sorting without taking into consideration of 'The', 'An', or 'A'
  - Use a regular expression
  - `^` starts with
  - `bandName.replace(/^(a |the |an )/i, '').trim();`
    - Note the spacing is important

### 18 - Tally String Times With Reduce

- Convert nodelist to array
  - `Array.from(category.querySelectorAll('a'));`
- `const [mins, seconds] = timeCode.split(':');`
- Convert string array to number array
  - `timeCode.split(':').map(parseFloat)`

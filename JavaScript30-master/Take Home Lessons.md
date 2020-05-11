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

### 19 - Unreal Webcam Fun

- Browser-sync node module
  - Module for opening up website on a server (local)
  - Live reloading
- Retrieving video
  - `navigator.mediaDevices.getUserMedia({ video: true, audio: false }) <- returns a promise`
  - Deprecated: `video.src = window.URL.createObjectURL(localMediaStream);`
  - Instead use: `video.srcObject = localMediaStream;`
- Painting to canvas
  - Need to make sure canvas is same size as video
  - Pass the `context.drawImage(video, 0, 0, width, height)`
    - 0, 0 means start at the top left hand of the canvas
  - Using `video.addEventListener('canplay', paintToCanvas);` means that once our video is playing which emits an event called canplay which means we can now start the canvas
- `setInterval(() => someFunction, 16);` will call someFunction every 16 milliseconds
- Taking a photo
  1. Retrieve the picture from the canvas
  2. Create a new anchor link element
  3. Set the attribute 'download' to whatever name you want the photo to be
- Photo Filters
  1. Take pixels out of canvas - For every one pixel there are 4 entries in the array that describe the color -> red, green, blue, alpha
  2. Apply filters
  3. Put pixels back in
  - `ctx.globalAlpha = 0.1;` writes the new canvas on top of the last 10 frames
  - If you want the pixel to be transparent set alpha of pixel to 0

### 20 - Native Speech Recognition

- Speech recognition is a global variable that lists in the browser
  - Chrome -> window.webkitSpeechRecognition
- `recognition.interimResults = true;` makes it populate while speaking, otherwise you must stop speaking before it returns anything
- Once you finish talking recoginition will stop so to prevent this have an event listener: `recognition.addEventListener('end', recognition.start);` to recall the start function

### 21 - Geolocation based Speedometer and Compass

- We cannot fake heading and speed so we are using an IOS simulator
  - In Xcode, -> Xcode, Open Developer Tool, Simulator
- Navigators geolocation
  - `getCurrentPosition()` just gets the current location oncce
  - we want `watchPosition()`
    - Takes two functions: a success callback and fail callback(for when they say no to permissions)
- Heading
  - The number of degress relative to north

### 22 - Follow Along Links

- First steps to understanding stripe follow along dropdown
- `element.getBoundingClientRect()`
  - Gives us all the information about where the element is on the page
- Span with `transition: all 0.2s;` and us adjusting the width and height makes it grow gradually
- After applying the width, height, and transform we may look done. However if you slighty scroll down you will see the highlighting element doesn't scroll and just stays in the inital location
  - Solution: find how far the user has scrolled down and over
  - `linkCoords.top + window.scrollY`
  - `left: linkCoords.left + window.scrollX`

### 23 - Speech synthesis

- Text to voice - Comes in most browsers
- Using the name attribute we choose to use rate, pitch, and text which aligns up with the property of SpeechSynthesisUtterance
- SpeechSynthesisUtterance
- speechSynthesis is a global variable
  - `speechSynthesis.speak(pass it an utterate)`
  - when speechSynthesis loads it will fire an event called voiceschanged
- Setting the voice we cannot just set it to the name, but we have to find the voice in the voices array where the name matches
  - `msg.voice = voices.find(voice => voice.name === this.value);`
- Another way to call a function that requires a parameted
  - `stopButton.addEventListener('click', () => {toggle(false);});`
  - To this `stopButton.addEventListener('click', toggle.bind(null. false));`
  - Or this `stopButton.addEventListener('click', () => toggle(false))`

### 24 - Sticky Nav

- On page load grab the location of the top of the nav bar
- Once you add the class with the position now being fixed you'll notice a jump
  - That is because that element is now 'floating' above the other elements and the other elements on the page will shift up to take that new place.
  - Solution: add padding to the body when we set the position as fixed
  - `document.body.style.paddingTop = nav.offsetHeight;`
- Cannot animate width from 0 to auto so we used max-width from 0 to a bigger size so we could use our transition

        li.logo {
          max-width: 0;
          overflow: hidden;
          background: white;
          transition: all .5s;
          font-weight: 600;
          font-size: 30px;
        }

        .fixed-nav li.logo {
          max-width: 500px;
        }

### 25 - Event capture, Propagation, Bubbling and Once

- Event listeners:

  - `element.addEventListener(event, function, optionsObject)`
  - If optionsObject = `{capture: true}` the function will not be run on the bubble up. Instead the function will be run on the capture down
    - Instead of capturing down and bubbling up to get 3, 2, 1 it will be 1, 2, 3 where 3 is the most nested element
    - By default it is false
  - If optionsObject = `{once: true}`
    - It will listen for a click and then unbinds itself (same as element.removeEventListener(event, function))
    - This prevents any future clicks on the element
    - Example of when you would want to use this is at the store checkout

- Capture:

  - When you click on an element that is nested within others it knows you clicked on the outer element, then the next down, and so on until it gets to the level of element you clicked on
  - Ripples top-down and captures all of the events. From there since it is at the bottom it bubbles up

- Bubbling: the browser will figure out what you clicked on but it will also trigger other clicks
  - For example, if we click the most inner element of three rectangles stacked on top of each other
    - It will call the event listener on the most inner, then the second most inner, and so on
    - It calls each element that has the event handler set up
  - If you are listening for a click on multiple nested elements then it will trigger on all of them
  - Bubble-up, triggering the events as you go up
- Stop Propagation
  - On the event you can call `event.stopPropagation()` which will stop the event from bubbling up
  - You can use this with the capture option set to true
    - This will call the outer most element that wraps the element that was clicked and call the function on it.
    - When the function executes the stopPropagation function will prevent it from going down into further elements

### 26 - Stripe Follow Along Dropdown

- `.cool > li` is all the list items inside the element with the class cool
- `.dropdownBackground.open` is when an element with a dropdownBackground class also has a class of open
- Events:
  - mouseenter, mouseleave
- Get the dropdown elements and display them
- When you enter into a function, the value of _this_ changes
  - However if you change it into an arrow function the value of _this_ is inherited from the parent
- Hidding elements
  - `Opacity: 0;` and `display: none;`
  - Because you cannot go from opacity 0 to 1 and display none to display block
- element.getBoundingClientRect() gives you information relative to where on the page it is so with the dropdowns we need to also known where the nav is so we can offset it

        this.classList.add('trigger-enter');
        setTimeout(() => {
          if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
          }
        }, 150);

        // Above is equalivant to below
        setTimeout(() => {
          this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active');
        }, 150);

### 27 - Click and Drag to Scroll

- Use flags to control mouse down incase the user moves to another element and lifts up to mouse -> reset the flag on mouseleave

### 28 - Video Speed Controller UI

- Get the height of an element using `this.offsetHeight`
- To 2 decimal places - `number.toFixed(2);`
- video.playbackRate - is the speed of the video

### 29 - Countdown Clock

### 30 - Whack A Mole Game

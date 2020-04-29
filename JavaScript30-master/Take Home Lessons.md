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

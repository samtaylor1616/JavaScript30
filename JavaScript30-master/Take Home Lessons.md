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

### 03 -

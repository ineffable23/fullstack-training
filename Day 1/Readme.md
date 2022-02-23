
## formInputs:
### 1. Added onInput element

- The oninput property of the GlobalEventHandlers mixin is an event handler that processes input events on the ``` <input>, <select>, and <textarea> ``` elements. It also handles these events on elements where contenteditable or designMode are turned on. 

- Syntax: ```target.oninput = functionRef;```

### 2. Added javascript function to convert hex code to color name 

- It displays the name of the color picked. It displays the color name in the same text color as the color picked.
- I used ```ntc js (Name that Color JavaScript)``` library for achieving the same.
# Web Console
Redirect all console methods to display on a draggable console window (useful for mobile development)

## Features
* Simple design
* Close button
* Drag and Drop

## Methods
`console.log`: logs a white message to the console  
`console.success`: logs a green message to the console  
`console.info`: logs a blue message to the console  
`console.warn` and `console.error`: logs a red message to the console  
All errors are automatically caught and passed to `console.warn`  

## Usage
`web-console` is a web component built with `stateful-components` and `drags.js`. To use this component, add drags.js and script.js to your project.

```html
<script src="https://unpkg.com/drags.js@1.0.3/drags.js" defer></script>
<script src="script.js" type="module"></script>

<w-console></w-console>
```

All console methods are overridden; using `console.log` will cause the message to appear to the on-screen console window. 

## Screenshots
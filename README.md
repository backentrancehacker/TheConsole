# Web Console
Redirect all console methods to display on a draggable console window (useful for mobile development)

## Features
* Simple design
* Close button
* Drag and Drop (leveraging [drags.js](https://www.npmjs.com/package/drags.js))

## Methods
`console.log`: logs a white message to the console  
`console.success`: logs a green message to the console  
`console.info`: logs a blue message to the console  
`console.warn` and `console.error`: logs a red message to the console  
All errors are automatically caught and passed to `console.warn`  

## "Usage"
Since all console methods are overrided, you can use `console.log` just as normal.

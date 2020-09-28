## Intro to HTML
- div: block   
- span: groups inline  
- attribute: key-vaue pair  
- img -> `<img src="blah.png">`  
- link -> `<a href="url">Link Text</a>`
- Relative path or new protocol (http)

## Intermediate HTML
 - label can be nested or un-nested connected with for loop
 - validation - required attribute ccan be added to input tag

 ## Intoduction to CSS
- General Rule (formatting)  
`selector {`  
`    property: value;`  
`{`

- Hexadecimal colors
    - 6 digits
    - red _ _ green _ _ blue _ _
- rgb colors
    - rbg(red, green, blue)
    - 0 min 255 max
    - `rgb(0, 35, 255)`
- rgba colors
    - rgba(red, green, blue, alpha)
    - alpha is transparency
    - alpha min 0 alpha max 1
    - `rgba(20, 100, 255, 0.3)`
- Selectors
    - element `h1`
    - class `.class`
    - id `#name`
    - star `*` affects everything
    - descendant ie. all a tags inside of an li `li a`
    - adjacent `h4 + ul` all ul adjacent to h4
    - attribute `a[href="google.com"]` every a tag with the specific link
    - nth of type `ul:nth-of-type(3)` the third ul

## Intermediate CSS
- Font size
    - em: dynamic, relative to parent element
        - ie. 2em is 2x as big as parent
    - rem: relative to root element
- font weight
    - bold
    - 100-800 numeric
- text align
    - center, left, right
- text decoration
    - strike through, etc
- Box model
    - content, padding, border, margin
    - length, width (pixels or percentage)
    - `margin: top right bottom left`
    - auto

## Bootstrap
- use premade bootstrap classes for nice-lookin shit
- making site mobile-responsive
    `<meta name="viewport" content="width=device-width, initial-scale=1">`
    add to head element above title
- Flexbox
    - justify-content-(center, left, right, ...) affects the row
    - align-items-(center, start, end, baseline, stretch) affects the column
- Grid

## JavaScript 
- Primitives
    - numbers, strings, booleans, null, undefined
- variables
    - var variableName = name;
- built-in methods
    - clear()
    - alert("The Alert");
    - console.log("Hello from the console");
    - prompt("what is your name?");
- boolean logic
    - comparison operators: >, >=, ==, !=, === (value and type), !== s
- logical operators
    - &&, ||, !
- conditional statements
    - `if (age < 18) {console.log("Sorry, you are young lol")}`
- Loops
    - DRY don't repeat yourself
    `while (condition) {some code}`
    `for (init; condition; step) {some code}`
    `arr.forEach(someFunction)`

## DOM Manipulation
- Selectors
    - `getElementsByTagName("xx")` returns a node list
    - `querySelector("xx")`

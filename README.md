# Calculator Benchmark
Clone repo, open calculator.html file in browser.



## Specs


Stages 1 - 4 should be completed within a week, with stage 4 as a stretch goal should I complete the previous stages with time to spare.


### Stage 1

In stage 1 you will only be using `HTML` and `CSS` to build a clone of the OS X calculator interface. You're only building the interface in this stage. You'll make the calculator work in stage 2.

![calculator-in-browser](https://cloud.githubusercontent.com/assets/8385/22572099/6786dd74-e957-11e6-9340-278e63aa3809.png)

##### In this stage you will be using at least the following skills:

- HTML/CSS positioning
- CSS text/type styling
- Web Fonts
- Proper HTML formatting
- Proper CSS formatting
- Proper DOM positioning of assets
- Positioning with `inline`, `block` and `inline-block`
- CSS pseudo-selectors
- CSS transitions
- Chrome Developer Tools Element tab

##### During this phase you should…

- Use [normalize.css](https://necolas.github.io/normalize.css/)
- NOT use any other css frameworks or libraries
- NOT use any JavaScript
- NOT use an express server
- NOT use images
- NOT use `<table>` tags
- NOT use `<form>` tags
- NOT use `<input>` tags

##### Specs

- [  ] All text is in the [Roboto](https://fonts.google.com/specimen/Roboto) web font
- [  ] Your `HTML` and `CSS` follows this [style guide](https://google.github.io/styleguide/htmlcssguide.xml)
- [  ] The calculator is positioned in the center of the page, both vertically and horizontally
- [  ] If the window is too small for the calculator, the page scrolls, both vertically and horizontally
- [  ] Each button has a CSS transition to slightly darken the background color on hover over 100ms
- [  ] Each button has a CSS transition to slightly darken the background color on click over 100ms
- [  ] All class names re: the calculator are name-spaced under `.calculator-…`
- [  ] Your stylesheet contains little to no duplicate style declarations



### Stage 2

In stage 2 you will be adding `JavaScript` to make the calculator work.

##### In this stage you will be using at least the following skills:

- ES5 syntax
- Registering event listeners
- Binding to the DOM Ready event
- JavaScript closures
- JavaScript callbacks
- JavaScript formatting
- Event Delegation
- Event bubbling
- Querying the DOM API
- Manipulating the DOM using the DOM API
- Avoiding using the DOM for state


##### During this phase you should…

- NOT use `jQuery` or any other `JavaScript` libraries or frameworks

##### Specs

- [  ] Your `JavaScript` is written in `ES5`
- [  ] Your `JavaScript` follows this [style guide](https://google.github.io/styleguide/jsguide.html)
- [  ] Your JavaScript defines 1 or less global variables
- [  ] The Calculator display is not an `<input>`
- [  ] Typing a relevant key at any point is reflected on the calculator
- [  ] Typing a relevant key causes the corresponding button on the calculator to appear to have been pressed. AKA flashes active
- [  ] The state of the calculator is not be stored in the `DOM`
- [  ] The mathematical operations for your calculator are each their own function, and are defined outside of any DOM event handler
- [  ] When the length of the number displayed exceeds the width available, the font-size deterministically drops


### Stage 3

In stage 3 you are going to add a second calculator to the page. Both calculators will be exactly the same but work independently. This will likely require you to refactor some of the JavaScript you wrote in stage 2.


![two-calculators-in-browser](https://cloud.githubusercontent.com/assets/8385/22572109/72df42ba-e957-11e6-8c9e-c9efd39045c1.png)


##### In this stage you will be using at least the following skills:

- Event delegation
- JavaScript Constructors
- Componentization
- Composition

##### During this phase you should…

- duplicate the HTML for the calculator
- NOT try and render a calculator from `JavaScript`
- NOT use `jQuery` or any other `JavaScript` libraries or frameworks
- consider using a constructor called `Calculator`
- NOT give each calculator a unique `id` or `classname`

##### Specs

- [  ] Each calculator acts independently.
- [  ] Clicking anywhere on a calculator focuses that calculator.
- [  ] Typing a relevant key affects the focused calculator.
- [  ] Use event delegation to avoid binding a `click` event listener to each button
- [  ] The focused calculator is `opacity: 1`
- [  ] The not-focused calculator is `opacity: 0.5`



### Stage 4

In stage 4 you are going to move the work of your calculator to the server. This might seem silly but its a good way to practice moving logic from the browser to the server without the logic itself being too complex.


##### In this stage you will be using at least the following skills:

- Setting up a simple Node express server
- XHR / AJAX requests
- Sending conventional HTTP status codes
- Using conventional HTTP verbs
- Setting common HTTP headers
- rendering JSON from express
- Following the RESTful routes convention

##### During this phase you should…

- initialize a node `package.json`
- use `express`
- use a JSON body parser
- NOT use any other node packages


##### Specs

- [ ] Each mathematical operation is done on the server
- [ ] Each mathematical operation should have it's own API endpoint
- [ ] Each request for a mathematical operation is a `post` request
- [ ] Each operation request responds with `JSON`
- [ ] When the calculator is waiting for an operation request response, it ignores all input


## Stretch Goals:

### Stage 5


In stage 5 you are going to add persistence to your express server. We're going to be persisting the history of the users calculations. We're also going back to just having one calculator on the page.

![calculator-with-history](https://cloud.githubusercontent.com/assets/8385/22572149/9be3c83e-e957-11e6-9431-9b9742b6b4af.png)

##### In this stage you will be using at least the following skills:

- SQL schema design
- writing SQL queries


##### During this phase you should…

- use the `pg`, `pg-promise`, and/or `knex` packages
- NOT use any other node packages
- create a `visitors` table
- create a `calculations` table
- persist each mathematical operations

##### Specs

- [ ] there is only one calculator on the page
- [ ] the calculator displays a scrolling history of calculations
- [ ] the most recent calculation result is at the bottom
- [ ] the scroll-back history is always scrolled to the bottom when a new operation result is added
- [ ] the calculator history is stored per visitor (browser)
- [ ] the express app uses a cookie to track individual visitors
- [ ] reloading the page restores the calculator history
- [ ] the server stores up to 100 calculation results
- [ ] all mathematical operations have their own function, defined outside of any express router handlers.

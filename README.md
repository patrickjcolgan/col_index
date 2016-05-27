# Cost of Living Index

### Authors:
Cody Hulsey
Jeff Torres
Patrick Colgan

## Problem Domain:
You have been hired by Code Fellows, a world-class code school training web and mobile developers in industry best practices, in-demand frameworks and technologies, and more. A typical Code Fellows graduate is overwhelmed by job offers and doesn't have time to do research on the cost of living in a particular city. Code Fellows would like you to create an app that displays potential locations that these graduates can afford to live based on the job offers they receive.

### Basic Functionality on results.html
+ userInput is a number value (expected salary)
+ We add 1000 to each side of that number and search for metro areas that have a comparable median income (calculated via Cost of Living index).
+ If there are fewer than 10 results, we incrementally increase this salary range by 5k, 15k, 25k.

### randomizer
Some userInputs will generate many matches. We randomized results, so user doesn't just always see the first results alphabetically.

### Bar Chart
Displays median income for each metro area that most closely matches the userInput value.

### Polar Area Chart
Shows how much you're likely to spend in each city for the following categories:
+ grocery
+ housing
+ utilities
+ transportation
+ healthcare
+ miscellaneous

### Google Maps API
+ Home Page
  +

+ Results Page
  + 

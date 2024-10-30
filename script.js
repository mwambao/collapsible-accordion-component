
//1. Using querySelectorAll(), select all the elements with a class of title.
let title = document.querySelectorAll("title");
console.log(title);

//2. Using querySelectorAll(), select all the elements with a class of myText.This should be the same number of elements as the title elements.

let myText = document.querySelectorAll("myText");
console.log(myText);


//3. Iterate through all the title elements and add event listeners that, once clicked, will select the next element siblings.

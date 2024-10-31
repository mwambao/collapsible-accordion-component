
//1. Using querySelectorAll(), select all the elements with a class of title.
let titles = document.querySelectorAll(".title");
//console.log(titles);

//2. Using querySelectorAll(), select all the elements with a class of myText.This should be the same number of elements as the title elements.

let myText = document.querySelectorAll(".myText");
//console.log(myText);


//3. Iterate through all the title elements and add event listeners that, once clicked, will select the next element siblings.

for (let i=0; i < titles.length; i++ ){
    //console.log(titles[i].textContent);
    titles[i].addEventListener("click", function (){
        console.log(titles[i].nextElementSibling);
    })
}

//4. Select the element on the click action and toggle the classlist of the element with the class of active. This will allow the user to click the element and hide and show the below content.
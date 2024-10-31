
//1. Using querySelectorAll(), select all the elements with a class of title.
let titles = document.querySelectorAll(".title");
//console.log(titles);

//2. Using querySelectorAll(), select all the elements with a class of myText.This should be the same number of elements as the title elements.

let myText = document.querySelectorAll(".myText");
//console.log(myText);


//3. Iterate through all the title elements and add event listeners that, once clicked, will select the next element siblings.
//4. Select the element on the click action and toggle the classlist of the element with the class of active. This will allow the user to click the element and hide and show the below content.


for (let i=0; i < titles.length; i++ ){
    //console.log(titles[i].textContent);
    titles[i].addEventListener("click", function (){
     //   console.log(titles[i].nextElementSibling);
     remover();
       titles[i].nextElementSibling.classList.toggle("active");
    })
}

//5. Add a function that will be invoked each time the elements are clicked that will remove the class of active from all the elements. This will hide all the elements with myText.

function remover() {
    for (let x=0; x < myText.length; x++) {
        myText[x].classList.remove("active");
    }
}
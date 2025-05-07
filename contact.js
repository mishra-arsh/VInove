// const heading = document.querySelector('.headingH1');
// console.dir(heading.innerText);
// heading.innerText = heading.innerText + " " +  "from apna collage students";
 


// Example of closure and nested function

// function changeColor(x){
//     function color(y){
//         console.log("color changed");
//         return x+y;
//     }
//     console.log(color(10));
// } 
// changeColor(2);

// callback function

// function greet(name, callback) {
//     console.log("Hello!" + name);
//     callback();
// }
// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// greet("John", sayGoodbye);
 
// Question 1) Write a function that returns the square of a number.

const square = (val) => {
    return val * val;
}
console.log(square(10));

// Question 2) Write a function that takes a string and returns it in uppercase.

const toUppercase = (str) => {
    const newStr = str.toUpperCase();
    console.log(newStr);
}
toUppercase("hello world");

// Question 3) Create a function that checks if a number is even or odd.

const isEvenOrOdd = (val1) => {
    if (val1 % 2 === 0) {
        console.log(val1 + " is even");
    }
    else{
        console.log(val1 + " is odd");
    }
};
isEvenOrOdd(65362);

// Question 4) Write a function that takes two numbers and returns the larger one.

const isLarger = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1 + " is larger");
    }
    else{
        console.log(num2 + " is larger");
    }
};
isLarger(23, 45);

// Question 5) Write a function that reverses a string.

const reverseString = (str) => {
    console.log(str.split("").reverse().join(""));
}
reverseString("hello world");

// Question 6) Write a function that filters out negative numbers from an array.
let arr = [-1, 2, -3, 4, -5, 6];
const filterNegativeNum = (arr) => {
    const filter = arr.filter ((val) => {
        return val >= 0;
    });
    console.log(filter);
}
filterNegativeNum(arr);

// Question 7) Create a function that accepts a callback and a name, and calls the callback with the name.

const greet = (name , callback) => {
    console.log("Hello" + name);
    callback();
}

const Goodbye = () => {
    console.log("Goodbye");
}
greet("Arsh", Goodbye);

// Questions 8) Write a function that counts the number of vowels in a given string.

const vowelCount = (str) => {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            count++;
        }
    }
    console.log(count);
};
vowelCount("hello world");

// DOM practice
const title = document.getElementById("heading");
console.log(title);
title.addEventListener("mouseover", () => {
    title.innerText = "You Hovered Me";
    title.style.color = "red";
    title.style.transition = "transform 0.5s ease";
    title.style.border = "2px solid black";
});
title.addEventListener("mouseout", () => {
    title.innerText = "Namaste Duniya";
    title.style.color = "";
    title.style.border = "none";
});

const list = document.querySelector("lists");
console.log(list);
const listItems = document.querySelectorAll(".item-lists");
listItems.forEach((item) => {
    console.log(item.innertext + " " + item.className);
    item.style.color = "red";
    item.style.fontSize = "20px";
    item.style.fontWeight = "bold";
    item.style.backgroundColor = "black";
    item.style.padding = "10px";
    item.style.margin = "10px";
    item.addEventListener("click", () => {
        alert("Clicked" + item.innerText);
    });
    item.addEventListener("mouseover", () => {
        item.style.color = "black";
        item.style.backgroundColor = "white";
        item.style.transition = "transform 0.5s ease";
        item.style.transform = "translateY(-5px)";
    });
    item.addEventListener("mouseout", () => {
        item.style.color = "red";
        item.style.backgroundColor = "black";
        item.style.transform = "translateY(0px)";
        item.style.transition = "transform 0.5s ease";
    })
    
    
});
// console.log(listItems);




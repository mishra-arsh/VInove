const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll('.nav-links li');
// let num = 30;
// let userNum = prompt("Guess a number between 1 to 35");

// while (userNum != num){
//     userNum = prompt("OOPS Wrong number! Enter again...");
// }
// console.log("Congrats now you are correct... ");


// burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
//     navLinks.forEach((Link, index) => {
//         if(Link.style.animation){
//             Link.style.animation = '';
//         } else {
//             Link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//         }
//     });
//     burger.classList.toggle('toggle');
// });
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smoooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let loader = document.querySelector('.loader');
        let submitBtn = document.querySelector('.submit-btn');

        loader.style.display = 'block';
        loader.classList.add('rotate'); // Add rotation class
        submitBtn.style.display = 'none';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert("Form Submitted Successfully!");
            loader.style.display = 'none';
            loader.classList.remove('rotate'); // Remove rotation class
            submitBtn.style.display = 'block';
            submitBtn.disabled = false;
        }, 3000);

        contactForm.reset();
    });
});

// // Strings Methods
// let str = "Sndu";
// let str2 = "Cando";
// let res = str.concat(str2);
// console.log(res);
// console.log(str.slice(0,3));
// let arr = ['24','45','87','46'];
// let n = 0;
// for(let marks of arr){
//     n += marks;
// }
// let avg = n / arr.length;
// console.log(avg);
  
// // Arrays in JS
// let items = [250,645,300,900,50];
// for(let i of items){
//     let offer = i /10;
//     let res = i - offer;
//     console.log(res);
// }

// let veggies = ['tomato','potato','fingerlady','beans'];
// veggies.push('chips','burger');
// console.log(veggies);

// veggies.pop();
// console.log(veggies);

// // Arrow Functions
// const space = (str, str2) => {
//     console.log(str + " " + str2);
// }

// space("Arsh", "Misra")

// // For Each MEthod
// let arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
// arr1.forEach((val, idx) => {
//     console.log(val*val , idx);
// });

// // Filter method for arrays
// let newArr = arr1.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(newArr);

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}



// const education = document.querySelector('.educations');
// console.dir(education);

// const skillTags = document.querySelector('.skill-tags');
// console.dir(skillTags);
// console.log(skillTags.children);


const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('name'),
contactEmail = document.getElementById('email'),

contactMessage = document.getElementById('message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Check if the fields have values
    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        errorMessage.textContent = 'Write all the input fields';
        errorMessage.style.color = 'red'; // Set error message color
        errorMessage.style.display = 'block'; // Ensure the message is visible
    } else {
        emailjs.sendForm('service_7bxwz7h', 'template_i8criwq', '#contact-form', 'xKECJ8SPVHDJP7CVc').then(() => {
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message Sent Successfully';
            errorMessage.style.color = 'green'; // Set success message color
            errorMessage.style.display = 'block'; // Ensure the message is visible

            setTimeout(() => {
                errorMessage.textContent = '';
                errorMessage.style.display = 'none'; // Hide the message after 5 seconds
            }, 5000);
        },
        (error) => {
            alert('OOPs! SOMETHING WENT WRONG...', error);
        });

        // Clear the form fields
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);
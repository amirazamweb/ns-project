
let servicesBtn = document.querySelectorAll('#btn-container button');
let serviceDetailsSections = document.querySelector('#services-details-container');

for (let i = 0; i < servicesBtn.length; i++) {
    servicesBtn[i].addEventListener('click', function () {
        for (let i of servicesBtn) {
            i.style.cssText = 'background-color: #ffffff; color: #2C3A47;'
        }
        this.style.cssText = 'background-color: #335ff4; color: #ecf0f1;'
        for (let j of serviceDetailsSections.children) {
            j.style.display = 'none';
        }
        serviceDetailsSections.children[i].style.display = 'block';
    })
}

// show mobile menu
document.querySelector('#menu-icon').addEventListener('click', () => {
    document.querySelector('#hidden-menu').style.display = 'block'
})

// close mobile menu
document.querySelector('#close-menu').addEventListener('click', () => {
    document.querySelector('#hidden-menu').style.display = 'none'
})

// tesctimonial scrolling fro mobile view

let lesser = document.querySelector('.fa-less-than');
let greater = document.querySelector('.fa-greater-than');
let testimonilasContainer = document.querySelector('#testimonial-box-container');

let counter = 0;
// lesser click
lesser.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    for (let i = 0; i < testimonilasContainer.children.length - 1; i++) {
        testimonilasContainer.children[i].style.display = 'none'
    }
    testimonilasContainer.children[counter].style.display = 'block'
})
// greater click
greater.addEventListener('click', () => {
    counter++;
    if (counter > 2) {
        counter = 0;
    }

    for (let i = 0; i < testimonilasContainer.children.length - 1; i++) {
        testimonilasContainer.children[i].style.display = 'none'
    }
    testimonilasContainer.children[counter].style.display = 'block'
})



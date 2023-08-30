
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


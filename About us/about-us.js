// FAQ option 1 //
/* function faq(ele) {
    var x = ele.parentElement.nextElementSibling.style.cssText;
    if (x == 'max-height: 500px;') {
        ele.style.cssText = 'transform: rotate(0deg);';
        ele.parentElement.nextElementSibling.style.cssText = "transition:0.3s;max-height:0px;";
    }
    else {
        ele.style.cssText = 'transform: rotate(45deg);';
        ele.parentElement.nextElementSibling.style.cssText = "max-height:500px;";
    }
}*/

//FAQ option 2//
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

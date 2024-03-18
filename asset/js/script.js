const sliderItem = document.querySelectorAll('.slider-item')

for (let index = 0; index < sliderItem.length; index++) {
    sliderItem[index].style.left = index * 100 + "%"
}

const sliderItems = document.querySelector('.slider-items');
const arrRight = document.querySelector('.ti-arrow-right')
const arrLeft = document.querySelector('.ti-arrow-left')
let i = 0;

// slider 
if (arrRight != null && arrLeft != null) {
    arrRight.addEventListener('click', () => {
        
        if (i < sliderItem.length - 1) {
            i++;
            sliderMove(i);
    
        } else {
            return false;
        }
    });
    
    function sliderMove(i) {
        sliderItems.style.left = -i * 100 + "%";
    }
    
    arrLeft.addEventListener('click', () => {
        if (i <= 0) {
            return false;
        }
        i--;
        sliderMove(i);
    
    })
}

// function autoSlider() {
//     if (i < sliderItem.length - 1) {
//         i++
//         sliderMove(i);

//     } else {
//         i = 0
//         sliderMove(i);

//     }
// }
// setInterval(autoSlider, 3000)

// mane bar responsive
const menuBar = document.querySelector('.header-bar-icon')
const headerNav = document.querySelector('.header-nav')
menuBar.addEventListener('click', ()=> {
    headerNav.classList.toggle('active')
})

//sticky header
window.addEventListener('scroll',()=> {
    if (scrollY > 50) {
        document.querySelector('#header').classList.add('active')
    } else {
        document.querySelector('#header').classList.remove('active')
        
    }
})

// click product image detail 
const imageSmall = document.querySelectorAll('.product-images-items img')
const imageMain = document.querySelector('.main-image')
for (let index = 0; index < imageSmall.length; index++) {
    imageSmall[index].addEventListener('click', ()=> {
        imageMain.src = imageSmall[index].src

        for (let i = 0; i < imageSmall.length; i++) {
            imageSmall[i].classList.remove('active')
        }
        imageSmall[index].classList.add('active')

    })

}

// quanlity product 
const quanPlus = document.querySelector('.ti-plus')
const quanMinus = document.querySelector('.ti-minus')
const quanInput = document.querySelector('.quanlity-input')
let qty = 1


if (quanMinus != null && quanPlus != null) {
    quanPlus.addEventListener('click', ()=> {
        qty++
        quanInput.value = qty
        
    })
    
    quanMinus.addEventListener('click', ()=> {
        if (qty <= 1) {
            return false;
        }
        qty--
        quanInput.value = qty
    })
    
}
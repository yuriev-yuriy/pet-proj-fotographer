'use strict';
import {galleryImg} from './picUrl.js';
import Refs from './refs';

export default
Refs.headerListRef.forEach(link1 => link1.addEventListener('click', () => {
    Refs.headerAfterRef.forEach(link2 => {
        const clickedEl = event.currentTarget;
        clickedEl.firstElementChild.classList.add('active'),
            clickedEl.firstElementChild.classList.remove('header__list-container')
    },
    )
}))

    Refs.links.forEach(link => link.addEventListener('click', event => {
    const clickedEl = event.currentTarget;
    Refs.list.classList.add('hide');
    Refs.innerTitle.textContent = clickedEl.textContent;
    Refs.innerContainer.classList.remove('hide');
    }))

Refs.innerBtn.addEventListener('click', () => {
    Refs.list.classList.remove('hide');
    Refs.innerContainer.classList.add('hide');
})

galleryImg.map(img => {
    let idx = 0
    const li = `<img class="main__inner-img" id=${idx} src=${img} alt="">`;
    Refs.innerList.innerHTML += li;
    const innerImg = document.querySelectorAll('.main__inner-img');
    innerImg.forEach(img => img.setAttribute('id', idx++)) 

   return innerImg
})


    
// Modal
// innerList.addEventListener('click', event => {
//     if (event.target === event.currentTarget) {
//     return
// }
//        modalImgRef.src = event.target.src;
//         openModal(event)
//     })
    

// overlayRef.addEventListener('click', onOverlayClick)

// const handleKeyDown = (event) => {
//     if (event.code === 'Escape') {
//         closeModal()
//     }
// }
// let idN;
// function openModal(event) {
//     console.log(event.currentTarget)
//     console.log(event.target)
//         modalRef.classList.add('Modal');
//     console.log(typeof event.target.id);
//     overlayRef.classList.add('showModal');
//     window.addEventListener('keydown', handleKeyDown);
//         idN = Number(event.target.id);
//     if (idN === 0) {    
//     btnPrev.setAttribute("disabled", "disabled");
//     }
//     if (idN === galleryImg.length - 1) {    
//     btnNext.setAttribute("disabled", "disabled");
//     }
//     btnNext.addEventListener('click', onForward)
//     btnPrev.addEventListener('click', onBackward)
// }

// function onForward() {
//     btnPrev.removeAttribute("disabled", "disabled");
// idN = idN + 1;
//         setForward(idN);
// }

// function onBackward() {
//     btnNext.removeAttribute("disabled", "disabled");
//     idN = idN - 1;
//     setForward(idN);
// }
    
// function setForward(id) {
//     if (id === 0) {
//             btnPrev.setAttribute("disabled", "disabled");
//     } else if (id === galleryImg.length - 1) {
//         btnNext.setAttribute("disabled", "disabled");
//     } 
//     modalImgRef.src = galleryImg[id];
// }
    
// function closeModal() {
//     modalRef.classList.remove('Modal');
//         overlayRef.classList.remove('showModal');
//         window.removeEventListener('keydown', handleKeyDown);
//     btnNext.removeEventListener('click', onForward);
//     btnPrev.removeEventListener('click', onForward);
//     btnNext.removeAttribute("disabled", "disabled");
//     btnPrev.removeAttribute("disabled", "disabled");
//         modalImgRef.src = '';
//     }

// function onOverlayClick() {
//     if (event.target === event.currentTarget) {
//         closeModal()
//     }
// }

// export {openModal, closeModal, handleKeyDown, onOverlayClick, setForward, onForward, onBackward};
import { galleryImg } from './picUrl.js';
import Refs from './refs';

// Modal
Refs.innerList.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
    return
}
       Refs.modalImgRef.src = event.target.src;
        openModal(event)
    })
    

Refs.overlayRef.addEventListener('click', onOverlayClick)

const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
        closeModal()
    }
}
let idN;
function openModal(event) {
        Refs.modalRef.classList.add('Modal');
    Refs.overlayRef.classList.add('showModal');
    window.addEventListener('keydown', handleKeyDown);
        idN = Number(event.target.id);
    if (idN === 0) {    
    Refs.btnPrev.setAttribute("disabled", "disabled");
    }
    if (idN === galleryImg.length - 1) {    
    Refs.btnNext.setAttribute("disabled", "disabled");
    }
    Refs.btnNext.addEventListener('click', onForward)
    Refs.btnPrev.addEventListener('click', onBackward)
}

function onForward() {
    Refs.btnPrev.removeAttribute("disabled", "disabled");
idN = idN + 1;
        setForward(idN);
}

function onBackward() {
    Refs.btnNext.removeAttribute("disabled", "disabled");
    idN = idN - 1;
    setForward(idN);
}
    
function setForward(id) {
    if (id === 0) {
            Refs.btnPrev.setAttribute("disabled", "disabled");
    } else if (id === galleryImg.length - 1) {
        Refs.btnNext.setAttribute("disabled", "disabled");
    } 
    Refs.modalImgRef.src = galleryImg[id];
}
    
function closeModal() {
    Refs.modalRef.classList.remove('Modal');
        Refs.overlayRef.classList.remove('showModal');
        window.removeEventListener('keydown', handleKeyDown);
    Refs.btnNext.removeEventListener('click', onForward);
    Refs.btnPrev.removeEventListener('click', onForward);
    Refs.btnNext.removeAttribute("disabled", "disabled");
    Refs.btnPrev.removeAttribute("disabled", "disabled");
        Refs.modalImgRef.src = '';
    }

function onOverlayClick() {
    if (event.target === event.currentTarget) {
        closeModal()
    }
}

export {openModal, closeModal, handleKeyDown, onOverlayClick, setForward, onForward, onBackward};
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

if(Refs.innerTitle === 'Portrait')
galleryImg.forEach(img => {
    let idx = 0
    Refs.innerList.insertAdjacentHTML('afterbegin', `<img class="main__inner-img" id=${idx} src=${img} alt="">`)
    const innerImg = document.querySelectorAll('.main__inner-img');
    innerImg.forEach(img => img.setAttribute('id', idx++)) 

   return innerImg
})

 galleryImg.forEach(img => {
            let idx = 0
            Refs.innerList.insertAdjacentHTML('beforeend', `<img class="main__inner-img" id=${idx} src=${img} alt="">`)
            const innerImg = document.querySelectorAll('.main__inner-img');
            innerImg.forEach(img => img.setAttribute('id', idx++))

            return innerImg
        }
        )

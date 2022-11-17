import './index.html';
import './index.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let hideModalWindow = document.querySelector('.modal-background');

let showFeedbackForm = document.querySelectorAll('.nav-button--chat');
let feedbackForm = document.querySelector('.feedback-form');
let hideFeedbackForm = document.querySelector('.feedback-form__close-button');

for (let i = 0; i < showFeedbackForm.length; i++) {
    let showFeedbackFormButton = showFeedbackForm[i];
    showFeedbackFormButton.onclick = () => {
        feedbackForm.classList.add('feedback-form--active');
        hideModalWindow.classList.add('modal-background--active');
        document.body.classList.add('lock');
    }

    hideFeedbackForm.onclick = () => {
        feedbackForm.classList.remove('feedback-form--active');
        hideModalWindow.classList.remove('modal-background--active');
        document.body.classList.remove('lock');
    }
}

let showCallbackForm = document.querySelectorAll('.nav-button--phone');
let callbackForm = document.querySelector('.callback-form');
let hideCallbackForm = document.querySelector('.callback-form__close-button');

for (let i = 0; i < showCallbackForm.length; i++) {
    let showCallbackFormButton = showCallbackForm[i];
    showCallbackFormButton.onclick = () => {
        callbackForm.classList.add('callback-form--active');
        hideModalWindow.classList.add('modal-background--active');
        document.body.classList.add('lock');
    }

    hideCallbackForm.onclick = () => {
        feedbackForm.classList.remove('feedback-form--active');
        callbackForm.classList.remove('callback-form--active');
        hideModalWindow.classList.remove('modal-background--active');
        document.body.classList.remove('lock');
    }
}

let showMobileMenu = document.querySelector('.nav-button--burger');
let mobileMenu = document.querySelector('.mobile-menu-wrapper');
let hideMobileMenu = document.querySelector('.mobile-menu__close-button');

showMobileMenu.onclick = () => {
    mobileMenu.classList.add('mobile-menu-wrapper--active');
    hideModalWindow.classList.add('modal-background--active');
    document.body.classList.add('lock');
}

hideMobileMenu.onclick = () => {
    mobileMenu.classList.remove('mobile-menu-wrapper--active');
    hideModalWindow.classList.remove('modal-background--active');
    document.body.classList.remove('lock');
}

hideModalWindow.onclick = () => {
    feedbackForm.classList.remove('feedback-form--active');
    callbackForm.classList.remove('callback-form--active');
    mobileMenu.classList.remove('mobile-menu-wrapper--active');
    hideModalWindow.classList.remove('modal-background--active');
    document.body.classList.remove('lock');
}

if (window.screen.width < 768) {

    const brandsGallerySwiper = new Swiper('.brands-gallery__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        slidesPerGroup: 1,
        pagination: {
            el: '.brands-gallery__swiper-pagination',
            clickable: true
        }
    });

    const typesGallerySwiper = new Swiper('.types-gallery__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        slidesPerGroup: 1,
        pagination: {
            el: '.types-gallery__swiper-pagination',
            clickable: true
        }
    });

    const pricesGallerySwiper = new Swiper('.prices-gallery__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        slidesPerGroup: 1,
        pagination: {
            el: '.prices-gallery__swiper-pagination',
            clickable: true
        }
    });
}

let pageMainText = document.querySelector('.page-main__text');
let pageMainTextViewMoreButton = document.querySelector('.page-main__view-more-button');
let pageMainTextHeight = pageMainText.style.height;
pageMainTextViewMoreButton.onclick = function () {
    if (pageMainTextViewMoreButton.textContent === 'Читать далее') {
        pageMainTextViewMoreButton.textContent = 'Свернуть'
        pageMainText.style.height = 'auto';
        pageMainTextViewMoreButton.classList.toggle('view-more-button--active');
    } else {
        pageMainTextViewMoreButton.textContent = 'Читать далее'
        pageMainText.style.height = pageMainTextHeight;
        pageMainTextViewMoreButton.classList.toggle('view-more-button--active');
    }
};

let brandsGallery = document.querySelector('.brands-gallery__content');
let galleryViewMoreButton = document.querySelector('.brands-gallery__view-more-button');
galleryViewMoreButton.onclick = function () {
    if (galleryViewMoreButton.textContent === 'Показать все') {
        galleryViewMoreButton.textContent = 'Скрыть'
        brandsGallery.style.height = 'auto';
        galleryViewMoreButton.classList.toggle('view-more-button--active');
    } else {
        galleryViewMoreButton.textContent = 'Показать все'
        brandsGallery.style.height = '165px';
        galleryViewMoreButton.classList.toggle('view-more-button--active');
    }
};

let typesGallery = document.querySelector('.types-gallery__content');
let typesViewMoreButton = document.querySelector('.types-gallery__view-more-button');
typesViewMoreButton.onclick = function () {
    if (typesViewMoreButton.textContent === 'Показать все') {
        typesViewMoreButton.textContent = 'Скрыть'
        typesGallery.style.height = 'auto';
        typesViewMoreButton.classList.toggle('view-more-button--active');
    } else {
        typesViewMoreButton.textContent = 'Показать все'
        typesGallery.style.height = '165px';
        typesViewMoreButton.classList.toggle('view-more-button--active');
    }
};
// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryElement1 = galleryItems
    .map(item => {
    return `<div>
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" /img>
        </a>
    </div>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryElement1);
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
console.log(galleryItems);
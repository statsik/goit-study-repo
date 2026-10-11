import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Error',
            message: 'Type message for searching!',
            position: 'topRight',
        });
        return;
    }

    gallery.innerHTML = '';
    loader.classList.add('visible');

    fetchImages(query)
        .then(images => {
            renderImages(images);
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Try again!',
                position: 'topRight',
            });
        })
        .finally(() => {
            loader.classList.remove('visible');
        });
});

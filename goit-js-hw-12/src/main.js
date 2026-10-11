import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

gallery.innerHTML = '';
loadMoreBtn.classList.remove('visible');
let loadedImages = 0;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Error',
            message: 'Type a search query!',
            position: 'topRight',
        });
        return;
    }

    page = 1;
    loadedImages = 0;
    gallery.innerHTML = '';
    loadMoreBtn.classList.remove('visible');
    loader.classList.add('visible');

    try {
        const data = await fetchImages(query, page);
        totalHits = data.totalHits;
        loadedImages += data.hits.length;
        renderImages(data.hits);

        if (loadedImages < totalHits && data.hits.length === 40) {
            loadMoreBtn.classList.add('visible');
        }
    } catch (error) {
        iziToast.error({ title: 'Error', message: 'Try again!', position: 'topRight' });
    } finally {
        loader.classList.remove('visible');
    }
});

loadMoreBtn.addEventListener('click', async () => {
    if (!query) {
        iziToast.warning({
            title: 'Error',
            message: 'No search query found!',
            position: 'topRight',
        });
        return;
    }

    page += 1;
    loadMoreBtn.classList.remove('visible');
    loader.classList.add('visible');

    try {
        const data = await fetchImages(query, page);
        loadedImages += data.hits.length;
        renderImages(data.hits);

        if (loadedImages >= totalHits || data.hits.length < 40) {
            loadMoreBtn.classList.remove('visible');
            iziToast.info({ title: 'Info', message: "We're sorry, but you've reached the end of search results." });
        } else {
            loadMoreBtn.classList.add('visible');
      }
      smoothScroll();
    } catch (error) {
        iziToast.error({ title: 'Error', message: 'Try again!', position: 'topRight' });
    } finally {
        loader.classList.remove('visible');
    }
});

function smoothScroll() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
    });
}

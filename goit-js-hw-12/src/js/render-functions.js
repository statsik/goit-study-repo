import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

export function renderImages(images) {
    if (images.length === 0) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        });
        return;
    }

    const galleryMarkup = createGalleryMarkup(images);
    gallery.appendChild(galleryMarkup);

    lightbox.refresh();
}

function createGalleryMarkup(images) {
    const galleryFragment = document.createDocumentFragment();

    images.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        const galleryItem = document.createElement('a');
        galleryItem.classList.add('gallery-item');
        galleryItem.href = largeImageURL;

        const img = document.createElement('img');
        img.src = webformatURL;
        img.alt = tags;
        img.loading = 'lazy';

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const createInfoBlock = (label, value) => {
            const div = document.createElement('div');
            const text = document.createElement('p');
            text.classList.add(`${label.toLowerCase()}-text`);
            text.textContent = label;
            const val = document.createElement('p');
            val.textContent = value;
            div.appendChild(text);
            div.appendChild(val);
            return div;
        };

        infoDiv.append(
            createInfoBlock('Likes', likes),
            createInfoBlock('Views', views),
            createInfoBlock('Comments', comments),
            createInfoBlock('Downloads', downloads)
        );

        galleryItem.appendChild(img);
        galleryItem.appendChild(infoDiv);
        galleryFragment.appendChild(galleryItem);
    });

    return galleryFragment;
}

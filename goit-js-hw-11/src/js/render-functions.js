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

    gallery.innerHTML = '';
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

        const likesDiv = document.createElement('div');
        const likesText = document.createElement('p');
        likesText.classList.add("likes-text");
        likesText.textContent = 'Likes';
        const likesValue = document.createElement('p');
        likesValue.textContent = likes;
        likesDiv.appendChild(likesText);
        likesDiv.appendChild(likesValue);

        const viewsDiv = document.createElement('div');
        const viewsText = document.createElement('p');
        viewsText.classList.add("views-text");
        viewsText.textContent = 'Views';
        const viewsValue = document.createElement('p');
        viewsValue.textContent = views;
        viewsDiv.appendChild(viewsText);
        viewsDiv.appendChild(viewsValue);

        const commentsDiv = document.createElement('div');
        const commentsText = document.createElement('p');
        commentsText.classList.add("comments-text")
        commentsText.textContent = 'Comments';
        const commentsValue = document.createElement('p');
        commentsValue.textContent = comments;
        commentsDiv.appendChild(commentsText);
        commentsDiv.appendChild(commentsValue);

        const downloadsDiv = document.createElement('div');
        const downloadsText = document.createElement('p');
        downloadsText.classList.add("downloads-text")
        downloadsText.textContent = 'Downloads';
        const downloadsValue = document.createElement('p');
        downloadsValue.textContent = downloads;
        downloadsDiv.appendChild(downloadsText);
        downloadsDiv.appendChild(downloadsValue);

        infoDiv.append(likesDiv, viewsDiv, commentsDiv, downloadsDiv);

        galleryItem.appendChild(img);
        galleryItem.appendChild(infoDiv);

        galleryFragment.appendChild(galleryItem);
    });

    return galleryFragment;
}

import galery from './gallery-items.js';

// Создание и рендер разметки по массиву данных и предоставленному шаблону.


const createGalleryItem = image => {

    const itemListRef = document.createElement('li');
    itemListRef.classList.add("gallery__item");

    const refListRef = document.createElement('a');
    refListRef.classList.add("gallery__link");
    refListRef.href = image.original;

    const imageRef = document.createElement('img');
    imageRef.classList.add("gallery__image");
    imageRef.src = image.preview;
    imageRef.setAttribute("data-source", image.original);
    imageRef.alt = image.description;
    // imageRef.textContent = image.description;

    refListRef.appendChild(imageRef);    

    itemListRef.appendChild(refListRef);

    return itemListRef;
};

const createGallery = galery.map(image => createGalleryItem(image));

const galleryListRef = document.querySelector('.js-gallery');
galleryListRef.append(...createGallery);


// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// Открытие модального окна по клику на элементе галереи.

// Подмена значения атрибута src элемента img.lightbox__image.

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, 
// пока грузится изображение, мы не видели предыдущее.
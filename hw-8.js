import gallery from './gallery-items.js';

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

    refListRef.appendChild(imageRef);    

    itemListRef.appendChild(refListRef);

    return itemListRef;
};

const createGallery = gallery.map(image => createGalleryItem(image));

const galleryListRef = document.querySelector('.js-gallery');
galleryListRef.append(...createGallery);


// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// Повесить прослушивание клика на весь ul.Если кликнули в картинку(удостоверится что именно 
    // в картинку) то нужно получить url большого изображения(для начала в консоль виводить ее data-source)


const handleGalleryClick = e => {

   e.preventDefault();


  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const sourceRef = e.target.dataset.source;
console.log(sourceRef);

  
  
  // Открытие модального окна по клику на элементе галереи.

const modalRef = document.querySelector('.js-lightbox');
  modalRef.classList.add("is-open");
  

  
 // Подмена значения атрибута src элемента img.lightbox__image.
  
  const imgLightboxRef = document.querySelector('img.lightbox__image');
  
imgLightboxRef.src = sourceRef;
 
  
  
  // Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');
  
  closeModalBtnRef.addEventListener('click', () => {
    modalRef.classList.remove("is-open")
    

      // Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, 
// пока грузится изображение, мы не видели предыдущее.
    imgLightboxRef.src = ' ';
  });
  
  

};

galleryListRef.addEventListener('click', handleGalleryClick);





























// ==============не брати до уваги==============


// const refs = {
//   itemList: document.createElement('li'),
//   image: document.createElement('img'),
//   refList: document.createElement('a'),
//   galleryList: document.querySelector('.js-gallery'),
// };

// const createGalleryItem = image => {

//     // const refs.itemList = document.createElement('li');
//     refs.itemList.classList.add("gallery__item");

//     // const refListRef = document.createElement('a');
//     refs.refList.classList.add("gallery__link");
//     refs.refList.href = image.original;

//     // const imageRef = document.createElement('img');
//     refs.image.classList.add("gallery__image");
//     refs.image.src = image.preview;
//     refs.image.setAttribute("data-source", image.original);
//     refs.image.alt = image.description;
//     // imageRef.textContent = image.description;

//     refs.refList.appendChild(refs.image);    

//     refs.itemList.appendChild(refs.refList);

//     return refs.itemList;
// };

// const createGallery = gallery.map(image => createGalleryItem(image));

// // const galleryListRef = document.querySelector('.js-gallery');
// refs.galleryList.append(...createGallery);


// // Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// // Повесить прослушивание клика на весь ul.Если кликнули в картинку(удостоверится что именно 
//     // в картинку) то нужно получить url большого изображения(для начала в консоль виводить ее data-source)



// const handleGalleryClick = e => {

//    e.preventDefault();
//   // const current = e.target;
//   // const prev = document.querySelector('.active');

//   // if (e.currentTarget === e.target) {
//   //   return;
//   // }

//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   // if (prev) {
//   //   prev.classList.remove('active');
//   // }

//   // current.classList.add('active');

//   console.log(refs.image.dataset.source);


//   // Открытие модального окна по клику на элементе галереи.

// const modalRef = document.querySelector('.js-lightbox');
// modalRef.classList.add("is-open");


// const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');
  
// closeModalBtnRef.addEventListener('click', () => modalRef.classList.remove("is-open"));

// };

// refs.galleryList.addEventListener('click', handleGalleryClick);


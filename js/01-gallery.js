import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector("div.gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", galleryClickHandler);

function galleryClickHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const biggerImage = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", EscKeyPressHandler);
      },

      onClose: () => {
        window.removeEventListener("keydown", EscKeyPressHandler);
      },
    }
  );

  biggerImage.show();

  function EscKeyPressHandler(evt) {
    if (evt.code === "Escape") {
      biggerImage.close();
    }
  }
}

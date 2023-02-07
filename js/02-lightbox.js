import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector("ul.gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", galleryClickHandler);

function galleryClickHandler(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target.alt);
  const biggerImage = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });
}

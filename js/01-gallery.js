import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const gallery = document.querySelector(".gallery");
// console.log(gallery);
function galleryMarkUp(items) {
  const markup = items
    .map(
      ({
        preview,
        original,
        description,
      } = items) => `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    )
    .join("");
  gallery.innerHTML = markup;
}

galleryMarkUp(galleryItems);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "botton",
});

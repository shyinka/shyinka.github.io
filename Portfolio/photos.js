function openImg(src) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  overlay.innerHTML = `<img src="${src}">`;

  overlay.onclick = () => overlay.remove();

  document.body.appendChild(overlay);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("img/photos.json")
    .then(res => res.json())
    .then(images => {
      const gallery = document.querySelector(".gallery");

      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.loading = "lazy";
        img.decoding = "async";
        img.onclick = () => openImg(src);
        gallery.appendChild(img);
      });
    });
});
function openImg(src) {
  const overlay = document.createElement("div");
  overlay.style = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    display:flex;
    justify-content:center;
    align-items:center;
  `;

  overlay.innerHTML = `<img src="${src}" style="max-width:80%; max-height:80%;">`;

  overlay.onclick = () => overlay.remove();

  document.body.appendChild(overlay);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("img/print.json")
    .then(res => res.json())
    .then(images => {
      const gallery = document.querySelector(".gallery");

      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.onclick = () => openImg(src);
        gallery.appendChild(img);
      });
    });
});
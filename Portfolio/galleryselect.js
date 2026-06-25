const link = document.createElement("a");
link.href = item.url;

const img = document.createElement("img");
img.src = item.image;

link.appendChild(img);
gallery.appendChild(link);
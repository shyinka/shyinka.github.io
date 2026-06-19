document.addEventListener("DOMContentLoaded", async () => {
  const placeholders = document.querySelectorAll("[data-include]");

  for (const el of placeholders) {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;
  }
});
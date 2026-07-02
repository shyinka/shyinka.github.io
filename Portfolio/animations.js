document.addEventListener("DOMContentLoaded", () => {
    fetch("video/animations.json")
        .then(res => res.json())
        .then(videos => {
            const gallery = document.querySelector(".video-gallery");

            videos.forEach(src => {
                const video = document.createElement("video");

                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.playsInline = true;

                video.preload = "metadata";

                const source = document.createElement("source");
                source.src = src;
                source.type = "video/webm";

                video.appendChild(source);
                gallery.appendChild(video);
            });
        })
        .catch(err => console.error(err));
});
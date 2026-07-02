document.addEventListener("DOMContentLoaded", () => {
    fetch("video/videos.json")
        .then(res => res.json())
        .then(videos => {
            const gallery = document.querySelector(".video-gallery-controls");

            videos.forEach(item => {
                const video = document.createElement("video");

                video.controls = true;
                video.preload = "metadata";
                video.loop = false;
                video.playsInline = true;

                video.poster = item.poster;

                const source = document.createElement("source");
                source.src = item.video;
                source.type = "video/webm";

                video.appendChild(source);
                gallery.appendChild(video);
            });
        })
        .catch(err => console.error(err));
});
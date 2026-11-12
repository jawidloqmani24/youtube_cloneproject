
const API_URL = "https://yt.chocolatemoo53.com";

// نمایش ویدیوها در صفحه
function displayVideos(videos) {
    const container = document.getElementById("videos-container");

    container.innerHTML = videos.map(video => {
        return `
            <div class="video">
                <div class="video-thumbnail">
                    <a href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank">
                        <img src="https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg" alt="${video.title}">
                    </a>
                </div>

                <div class="video-detail">
                    <div class="author">
                        <img src="./profile.jpg" alt="">
                    </div>

                    <div class="title">
                        <h3>${video.title}</h3>
                        <a href="#">${video.author}</a>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// دریافت ویدیوها
async function getVideos() {
    try {
        const response = await fetch(
            `${API_URL}/api/v1/search?q=javascript&type=video`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch videos");
        }

        const videos = await response.json();

        displayVideos(videos);

    } catch (error) {
        console.log(error.message);
    }
}

// اجرای اولیه
getVideos();

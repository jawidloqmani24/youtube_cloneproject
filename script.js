
var MyURL = "https://yt.chocolatemoo53.com";        //`${MyURL}/api/v1/search?q=javascript&type=video`

   async function getVideos(){
    try {
        const response = await fetch(`${MyURL}/api/v1/search?q=javascript,html,css,python,php,react,java&type=video`);
        if(!response.ok){
            throw new Error('Failed to get Videos');
        }
        const videos = await response.json();
        displayVideos(videos);
    } catch (error) {
        console.log(error.message);
    }
   }
   getVideos();
                                   //<a href="https://www.youtube.com/watch?v=${video.videoId}" target="">
                                                                    // <img src="https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg" alt="${video.title}">
                                                                    // </a>
                                                                    // <h3>${video.title}</h3>
                                                                    //<a href="#">${video.author}</a>
                                                                      
// نمایش ویدیوها در صفحه
function displayVideos(videos){
    const container = document.getElementById("videos-container");
    container.innerHTML = videos.map(video => {
      return `
    
    <div class="video">
    <div class="video-thumbnail">
    <a href="https://www.youtube.com/watch?v=${video.videoId}" target="">
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




async function searchVideos(){
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim();
    const url = `${MyURL}/api/v1/search?q=${encodeURIComponent(query)}&type=video`;
    if(query == ""){
        return;
    }
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Failed to fetch');
        }
        const result = await response.json();
        
        displayVideos(result);

    } catch (error) {
        console.log(error);
    }
    
}



function scrollCategories(direction) {

    const recommend = document.querySelector('.recommend');

    recommend.scrollBy({
        left: direction * 300,
        behavior: "smooth"
    });

}

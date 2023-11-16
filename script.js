const apiKey = "P0i9UrESQqtp3L8U4UoSeG8iezdOGqab"; //  API key
const apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;
const newsContainer = document.querySelector("#newsList");
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log("output is working");
    data.results.forEach((result) => {
      let articleDiv = document.createElement("div");
      articleDiv.classList.add("article");
      let titleH5 = document.createElement("h2");
      titleH5.textContent = result.title;
      articleDiv.appendChild(titleH5);
      let abstractP = document.createElement("p");
      abstractP.classList.add("news--description");
      abstractP.textContent = result.abstract;
      articleDiv.appendChild(abstractP);
      if (
        result.media?.length &&
        result.media[0]["media-metadata"].length > 2
      ) {
        let imageImg = document.createElement("img");
        imageImg.src = result.media[0]["media-metadata"][2].url;
        imageImg.classList.add("news--thumb--2img");
        articleDiv.appendChild(imageImg);
      }
      let newslink = document.createElement("a");
      newslink.href = result.url;
      newslink.target = "_blank";
      newslink.classList.add("news--link");
      newslink.innerHTML = "Read More";
      articleDiv.appendChild(newslink);
      newsContainer.appendChild(articleDiv);
    });
  })
  .catch((error) => {
    // Handle errors
    console.log("fucked");
    console.error("Error fetching data:", error);
  });

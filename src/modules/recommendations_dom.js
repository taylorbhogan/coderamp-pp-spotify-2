export function addRecommendationToHTML(recommendation) {
  const ul = document.getElementById("recommendations-ul");

  const li = document.createElement("li");
  li.className = "listItem";
  ul.appendChild(li);

  const a = document.createElement("a");
  a.href = recommendation.uri
  li.appendChild(a)

  const img = document.createElement("img");
  img.src = recommendation.imageUrl;
  a.appendChild(img);

  const songName = document.createElement("h3");
  songName.innerText = recommendation.name;
  a.appendChild(songName);

  const artistName = document.createElement("h4");
  artistName.innerText = recommendation.artists.join(", ");
  a.appendChild(artistName);
}

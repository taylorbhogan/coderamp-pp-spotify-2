export function addRecommendationToHTML(recommendation) {
  const ul = document.getElementById("recommendations-ul");

  const li = document.createElement("li");
  li.classList.add("listItem");
  ul.appendChild(li);

  // const a = document.createElement("a");
  // a.href = recommendation.uri;
  // li.appendChild(a);

  const img = document.createElement("img");
  img.src = recommendation.imageUrl;
  li.appendChild(img);

  const songName = document.createElement("h3");
  songName.innerText = recommendation.name;
  li.appendChild(songName);

  const artistName = document.createElement("h4");
  artistName.innerText = recommendation.artists.join(", ");
  li.appendChild(artistName);

  const iframe = document.createElement("iframe");
  iframe.src = `https://open.spotify.com/embed/track/${recommendation.id}?utm_source=generator`;
  li.appendChild(iframe);
}

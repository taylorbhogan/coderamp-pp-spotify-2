export function addPlaylistToHTML(playlistObject) {
  const ul = document.getElementById("playlists-ul");

  const li = document.createElement("li");
  li.className = "listItem"
  ul.appendChild(li);

  const a = document.createElement("a");
  a.href = playlistObject.uri
  li.appendChild(a)

  const img = document.createElement("img");
  img.src = playlistObject.imageUrl;
  a.appendChild(img)

  const h3 = document.createElement("h3");
  h3.innerText = playlistObject.name;
  a.appendChild(h3)
}

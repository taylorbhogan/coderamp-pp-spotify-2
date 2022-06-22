/**
 * Creates a list element for a given playlist object and appends it as a child to the <ul> tag element on the index.html page.
 * Incoming playlist objects look like the following:
 * {
    name: playlistName,
    imageUrl: playlistUrl,
  }
 * HINT: Don't forget to use DOM methods (createElement, setAttribute, appendChild).
 * You can set the text of an HTML element in JavaScript using .innerHTML
 *
 * EXTRA CREDIT: Tie in any other information that you might find interesting in the playlist data spotify makes available. How does that data get displayed for users to see?
 *
 * EXTRA CREDIT 2: Incorporate design elements into the way you programmatically create new fields in your webpage. Consider content, typography, color, image, composition, and other design ideas discussed in the guest lecture.
 */
export function addPlaylistToHTML(playlistObject) {
  const ul = document.getElementById("playlists-ul");

  const li = document.createElement("li");
  li.className = "playlist"
  ul.appendChild(li);

  const img = document.createElement("img");
  img.src = playlistObject.imageUrl;
  li.appendChild(img)

  const h3 = document.createElement("h3");
  h3.innerText = playlistObject.name;
  li.appendChild(h3)
}

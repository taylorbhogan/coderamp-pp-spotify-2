/** TODO: Return a list of objects. Each object should have the following structure:
 * {
 *   name -> playlist name,
 *   imageUrl -> playlist image url
 * }
 *
 * WHY: Spotify gives us a lot of information. This function retrieves relevant info about our playlists and passes it to the front-end.
 *
 * HINT: use console.log to see what the initial array of "items" looks like
 */
export function getListOfPlaylistObjects(spotifyArray) {
  const result = [];

  spotifyArray.forEach(spotifyPlaylist => {
    result.push({
      name: spotifyPlaylist.name,
      imageUrl: spotifyPlaylist.images[0].url
    })
  })

  // return an array of playlist objects
  return result;
}

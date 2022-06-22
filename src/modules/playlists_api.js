export function getListOfPlaylistObjects(spotifyArray) {
  const result = [];

  spotifyArray.forEach(spotifyPlaylist => {
    result.push({
      name: spotifyPlaylist.name,
      imageUrl: spotifyPlaylist.images[0].url,
      uri: spotifyPlaylist.external_urls.spotify,
    })
  })

  return result;
}

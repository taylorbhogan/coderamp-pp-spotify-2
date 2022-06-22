export function getListOfRecommendationObjects(jsonArray) {
  const res = [];
  jsonArray.forEach(song => {
    const artists = [];
    song.artists.forEach(artist => artists.push(artist.name))

    res.push({
      name: song.name,
      imageUrl: song.album.images[0]?.url,
      previewUrl: song.preview_url,
      uri: song.uri,
      artists
    })
  })

  return res;
}

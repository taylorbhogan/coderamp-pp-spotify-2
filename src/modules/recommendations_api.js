export function getListOfRecommendationObjects(jsonArray) {
  const res = [];
  jsonArray.forEach(song => {
    const artists = [];
    song.artists.forEach(artist => artists.push(artist.name))
    console.log(song);
    res.push({
      name: song.name,
      imageUrl: song.album.images[0]?.url,
      previewUrl: song.external_urls.spotify,
      uri: song.uri,
      artists,
      id: song.id
    })
  })

  return res;
}

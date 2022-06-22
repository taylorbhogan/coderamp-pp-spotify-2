/**
 * TODO: Return a list of objects. Each object should have the following structure:
 * {
      name: song name,
      previewUrl: song preview url link,
      uri: link to song on spotify,
      artists: array of artists attributed on the song, // array
   }
 *
 * WHY: Spotify gives us a lot of information. This function retrieves relevant info about our recommendations and passes it to the front-end.
 *
 * EXTRA CREDIT: Take a look at the full json data given for each recommended song. See any other information you'd like to display on your page?
 *
 * EXTRA CREDIT 2: Incorporate design elements into the way you programmatically create new fields in your webpage. Consider content, typography, color, image, composition, and other design ideas discussed in the guest lecture.
 */
export function getListOfRecommendationObjects(jsonArray) {
  const res = [];
  jsonArray.forEach(song => {
    const artists = [];
    song.artists.forEach(artist => artists.push(artist.name))

    res.push({
      name: song.name,
      previewUrl: song.preview_url,
      uri: song.uri,
      artists
    })
  })

  return res;
}

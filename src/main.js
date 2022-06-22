import {getListOfPlaylistObjects} from './modules/playlists_api.js'
import {getListOfRecommendationObjects} from './modules/recommendations_api.js'
import {getArtistSeeds, getAlbumSeeds, getGenreSeeds} from './modules/recommendations_seeds.js'
import {addPlaylistToHTML} from './modules/playlists_dom.js'
import {addRecommendationToHTML} from './modules/recommendations_dom.js'
import {getToken} from './modules/utils.js'
import {userId, clientId, clientSecret} from './modules/constants.js'


/**
 * getUserPlaylists searches for public playlists by a user
 * @param token: a client_credentials token authorized by Spotify (getToken)
 * @param userId: the user's Spotify ID
 */
async function getUserPlaylists(token) {
  return await fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
  .then(
    data => {
      return data
      .json() // extract json object
      .then( // once that's done (promise),
        json => {
          // look thru the different 'items' returned,
          return getListOfPlaylistObjects(json['items']);
        }
      );
    },
    // error handling function
    err => console.log('Something went wrong!', err)
  );
}

/**
 * Uses an array of playlist name objects to create HTML list items showcasing your
 * real public playlists.
 */
function renderPlaylists(playlists) {
  /**
   * `playlists` is a Javascript array of objects
   * Each object in the array looks like: {
   *  name: "playlist name",
   *  imageUrl: "playlist image url"
   * }
   * TODO: Use a for loop over playlists.
   *
   * TODO: For each item in the playlist, call addPlaylistToHTML on the playlist.
   */
  playlists.forEach(playlist => addPlaylistToHTML(playlist))
}

/**
 * getRecommendations generates recommendations based on seed songs, genres, albums and (optionally) other parameters that you'd like to use to generate songs
 * @param token: a client_credentials token authorized by Spotify (getToken in utils)
 * @param seed_artists: list of seed artist ID values (up to 5)
 * @param seed_genres: list of seed genre values (up to 5)
 * @param seed_albums: list of seed album ID values (up to 5)
 *
 * EXTRA CREDIT
 * @param ...: add more parameters to pass to the recommendations API!!!
 */
async function getRecommendations(token, seed_artists, seed_genres, seed_albums) {
  // create a query using the arguments
  // the query is sent in the URL of our request
  var query = [];
  if (seed_artists && seed_artists.length > 0) {
    query.push("seed_artists=" + seed_artists.join(','));
  }
  if (seed_genres && seed_genres.length > 0) {
    query.push("seed_genres=" + seed_genres.join(','))
  }
  if (seed_albums && seed_albums.length > 0) {
    query.push("seed_albums=" + seed_albums.join(','))
  }


  // call the spotify Recommendations endpoint
  // return a `recommendations` JavaScript array that contains objects
  return await fetch(`https://api.spotify.com/v1/recommendations?${query.join('&')}`, {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
  .then(
    data => {
      return data
      .json()
      .then(
        json => {
          return getListOfRecommendationObjects(json['tracks']);
        }
      );
    },
    // error handling function
    err => console.log('Something went wrong!', err)
  );
}

/**
 * Uses an array of recommendation objects to create HTML list items showcasing your public playlists.
 */
function renderRecommendations(recommendations) {
  /**
   * `recommendations` is a Javascript array of objects given to you by the Spotify API
   * NOTE: you don't make this yourself, you let Spotify make it for you by querying the /recommendations endpoint.
   * Each object looks like: {
      name: "track name"
      previewUrl: "link to 30s preview of song"
      uri: "uri of the track"
      artists: "array of artists (ids)"
      id: "id of the track"
      externalUrls: "external resource URLs (images, etc)."
  }
   * "For each" element in the array, create an HTML list item
   * The list item should contain info you'd like your user to see
   */
  // TODO: Use a for loop over playlists.

  // TODO: For each item in the playlist, call addRecommendationToHTML (from recommendations_dom.js)
  recommendations.forEach(recommendation => addRecommendationToHTML(recommendation))
}






/**
 * Adds content to the HTML page when it loads
 */
async function render_page() {
  let token = await getToken(clientId, clientSecret);


  const linkList = [...document.getElementById("linkList").children]
  linkList.forEach(navLink => {
    if (navLink.innerText === document.title){
      navLink.classList.add("activeLink")
    }
  })

  switch (document.title) {
    case "Playlists":
      let playlists = await getUserPlaylists(token);
      renderPlaylists(playlists)
      break;
    case "Recommendations":
      // TODO: call getArtistSeeds, getGenreSeeds, and getAlbumSeeds and store array results in variables
      let artistSeeds = ["7jVv8c5Fj3E9VhNjxT4snq"];
      let genreSeeds = [];
      let albumSeeds = [];

      let recommendations = await getRecommendations(token, artistSeeds, genreSeeds, albumSeeds);
      renderRecommendations(recommendations)
    default:
      break;
  }
}

console.log('print account info');
console.log(userId, clientId, clientSecret);

render_page()

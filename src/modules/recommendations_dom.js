/**
 * Creates a list element for a given recommendation object and appends it as a child to the <ul> tag element on the recommendations.html page
 * 
 * By default, we expect the incoming playlist objects to look like:
 * {
      name: songName,
      previewUrl: songPreviewURL,
      uri: songURL,
      artists: listOfArtists, // array
    }
 * 
 * HINT: Don't forget to use DOM methods (createElement, setAttribute, appendChild). 
 * You can set the text of an HTML element in JavaScript using .innerHTML
 */
export function addRecommendationToHTML(recommendation) {
  const ul = document.getElementById("recommendations-ul");

}
  
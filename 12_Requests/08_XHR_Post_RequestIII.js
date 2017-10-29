/*
8. XHR POST REQUESTS III

 In this exercise, we're going to update
 that boilerplate code to allow you to
 shorten a URL using the Google URL Shortener
  API.

*/


// --- On Codecademy ---

/*

1. follow instructions on Codecademy

*/

// ANSWER
// Include data for accessing Google APIs

const apiKey = 'USE YOUR OWN API KEY';
const url = 'https://www.googleapis.com/urlshortener/v1/url';
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
    }
  };
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {
	const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  const data = JSON.stringify({longUrl: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
    }
  };
  xhr.open('POST', urlWithKey);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}


// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);

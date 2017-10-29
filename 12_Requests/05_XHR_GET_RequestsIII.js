/*
5. XHR GET REQUEST III

In this exercise, we're going to use that boilerplate
code with some modifications to expand a URL that has been
shortened using the Google URL Shortener API.

Make sure you created an API key on lesson/step 1





*/


// --- On Codecademy ---

/*

1. follow instruction on Codecademy

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
      console.log(xhr.response);
    }
  };
}

function shortenUrl() {

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

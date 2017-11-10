/*
6. fetch() GET Requests V







*/


// --- On Codecademy ---

/*

1. Add another then to use the
network response

.then(jsonResponse => {
    console.log(jsonResponse);
  }
)};

2. change body of the jsonResponse callback
to:

$responseField.append('<p> Your expanded URL is </p><p> ' + jsonResponse.longUrl + '</p>');
    return jsonResponse;


*/

// ANSWER

// Include data for accessing Google APIs
const apiKey = 'AIzaSyAEg6VniWfaOQBpLKkBJ5Db9VPyP9gxJOM';

const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  fetch(urlToExpand).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    $responseField.append('<p> Your expanded URL is </p><p> ' + jsonResponse.longUrl + '</p>');
    return jsonResponse;
  }
)};

function shortenUrl() {

};

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

$expandButton.click(expand);
$shortenButton.click(shorten);

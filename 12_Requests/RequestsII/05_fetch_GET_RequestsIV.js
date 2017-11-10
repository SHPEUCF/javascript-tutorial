/*
5. fetch() GET Requests IV





*/


// --- On Codecademy ---

/*

1. get your api key from
Google URL Shortener

2. below apiKey create
const url = 'https://www.googleapis.com/urlshortener/v1/url';

3. inside expandUrl() do:

const urlToExpand =
url + '?shortUrl=' + $inputField.val() +
 '&key=' + apiKey;

4. in that function also call:
fetch(urlToExpand);

5. not to that, chain a .then() method
then(response => {})

6. test the app using a shorten URL

7. delete console.log and change it
to a "return" statement

8. below the if statement do:

throw new Error('Request failed!');

9. Separate the success callback
and the error callback functions with
a comma the log the network error

networkError => {
    console.log(networkError.message);
  }


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
  }
);};


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

/*
11. $.ajax() GET Requests III

Refactor the code you wrote for the URL
shortener using the $.ajax() method.

This reduces the amount of boilerplate
necessary and is overall more readable.

*/


// --- On Codecademy ---

/*

1. Delete the XHR object from previous version
and instead add:
$.ajax({});

2. To this, add property:
url: urlToExpand,

3. Add:
type: 'GET',

4. Add:
dataType: 'json',

5. Add success callback empty function with
a response parameter:
success(response) {

    },

6. to block of function add:
 $response.Field.append(
 '<p>Your expanded url is: </p><p>' +
 response.longUrl + '</p>');

7. add error callback function:
error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    },



*/

// ANSWER

// Include data for accessing Google APIs

const apiKey = 'AIzaSyAEg6VniWfaOQBpLKkBJ5Db9VPyP9gxJOM';
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
  $.ajax({
    url: urlToExpand,
    type: 'GET',
    dataType: 'json',
    success(response) {
      $response.Field.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    },
  });
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

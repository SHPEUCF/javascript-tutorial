/*
7. XHR POST REQUESTS II

AJAX POST request.


*/


// --- On Codecademy ---

/*

1. Follow instructions on Codecademy

*/

// ANSWER
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  };
};
xhr.open('POST', url);
xhr.send(data);

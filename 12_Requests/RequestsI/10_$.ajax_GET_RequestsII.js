/*
10. $.ajax() GET REQUESTS II

Let's write a complete GET request
using $.ajax()

*/


// --- On Codecademy ---

/*

1. $.ajax({});

2. add property:
url: 'https://api-to-call.com/endpoint',

3. add propert:
type: 'GET',

4. add propety:
dataType: 'json',

5. Add success callback function:
success(response) {
    console.log(response);
  }

6. Add error callback function:
error(jqXHR, status, errorThrown) {
   console.log(jqXHR);
 }

*/

// ANSWER

$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'GET',
  dataType: 'json',
  success(response) {
    console.log(response);
  },
  error(jqXHR, status, errorThrown) {
    console.log(jqXHR);
  }
});

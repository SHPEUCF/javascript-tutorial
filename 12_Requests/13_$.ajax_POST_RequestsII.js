/*
13. $.ajax() POST Requests II

reconstruct the code from the previous
exercise step-by-step until we have written
a complete POST request using the $.ajax()
method.



*/


// --- On Codecademy ---

/*

1. call $.ajax({});

2. add property:
 url: 'https://api-to-call.com/endpoint',

3. add type property:
type: 'POST',

4. add data property:
 data: JSON.stringify({id: 200}),

5. add:
dataType: 'json',

6. success(response) {
    console.log(response);
  }

7. error(jqXHR, status, errorThrown) {
    console.log(jqXHR);
  }

*/

// ANSWER
$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'POST',
  data: JSON.stringify({id: 200}),
  dataType: 'json',
  success(response) {
    console.log(response);
  },
  error(jqXHR, status, errorThrown) {
    console.log(jqXHR);
  }
});

//Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url_string, true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    // Print all country names in rest data.
    data.forEach(element => {
        console.log(element.name);
    });
}

request.send();

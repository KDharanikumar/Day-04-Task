// Question:2
// Use the rest countries API URL-> https://restcountries.com/v3.1/all and Display all the Country Flags in the Console.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
  var result = JSON.parse(request.response);
  //console.log(result);
  for (var i = 0; i < result.length; i++) {
    console.log(`${result[i].flags.svg}`);
  }
};

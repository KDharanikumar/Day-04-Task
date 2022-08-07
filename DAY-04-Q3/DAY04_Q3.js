// // Question:3
// // Use the Same Rest Countries and Print All Countries Names, Region, Sub-Region and Populations
// // https://restcountries.com/v3.1/all

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
  var result = JSON.parse(request.response);
  console.log(result);
  for (var i = 0; i < result.length; i++) {
    // I use Template literals to  Concatenate
    console.log(`
    Name       : ${result[i].name.common}
    Region     : ${result[i].region}
    Sub-region : ${result[i].subregion}
    Population : ${result[i].population}`);
  }
};

//An API is an Application Programming Interface and is a set of instructions 
//and protocols written in programming languages that determine how 
//two software componets communicate with each other

//Fetching your data through API
//fetch() is a built-in JavaScript function that allows you to make HTTP 
//requests to fetch resources (including data) from a network

//It uses promises which makes it easier to handle asynchronus operations.
fetch('https://api.example.com/data');
.then(response => response.json());
.then(data => console.log(data));
.catch(error => console.error('Error:', error));


//Axios is a popular HTTp client library for making 
//requests from browsers or Node.js applications 

//It is simpler to the built in fetch() API, with additional features
//such as requests & response interceptors,automatic JSON parsing and more

const axios = require('axios');

axios.get('https://api.example.com/data');
.then(response => console.log(response.data));
.catch(error => console.error("Error:", error));

//If you are working with jQuery you can use the $.ajax() function to make HTTP r
//requests
//It provides a simple interface for making AJAX requests and handling responses.

$.ajax({
  url:'https//api.example.com/data',
  method:'GET',
  success: function(data){
    console.log(data);
  },
  error: function(xhr,status,error){
    console.error('Error:', error);
  }
});

//XMLHttpRequest()
//Its a built in JavaScript object that provides an easy way to fetch
//data froma URl without a page refresh.
//Its a bit more lower-level compared to fetch() or libraries like Axios but is 
//Used by many applications 
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data',true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status ===200){
    console.log(xnhr.responseText);
  } else {
    console.error('Error:', xhr.statusText);
  }
};

xhr.send();

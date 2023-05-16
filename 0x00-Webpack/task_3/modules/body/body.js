import './body.css';
const $ = require('jquery');
const _ = require('lodash');

let counter = 0;

$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');

function updateCounter() {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));

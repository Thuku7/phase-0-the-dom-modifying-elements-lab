// Write your code here!

let wholePage = document.getElementsByTagName("body");



function removeHeading() {
  let initialHeader = document.getElementById('main');

  return document.body.removeChild(initialHeader)

  
  



}

removeHeading();


let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Robert Thuku is the champion";

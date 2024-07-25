// document.body.onload = addElement;
const txtString = "Event Interest Form";
let eventHeader = document.getElementById("formHeaderText");
// createTextSpan();
// for (const child of myElement.children) {
//     console.log(child.tagName);
//   }

function createTextSpan() {
console.log(txtString);
const txtArray = txtString.split("");
const letterSpans = [];
console.log(txtArray)
  for (i in txtArray) {
    console.log(txtArray[i]);
    letterSpans[i] = addElement(txtArray[i],eventHeader);
  }
  for (i in letterSpans)
  {
    letterSpans[i].style.setProperty("offset-distance",)
  }
}

function addElement(char, where) {
  // make a new span
  const newSpan = document.createElement("h1");
  // make the text and add to span
  const text = document.createTextNode(char);
  newSpan.appendChild(text);
  newSpan.classList.add("eventHeader")
  // insert at the end of the where element
//   where.insertAdjacentElement(beforeend, newSpan);
// console.log(document.getElementById(formHeaderText))
document.getElementById("formHeaderText").appendChild(newSpan);
return newSpan;
//   document.getElementById("formHeaderText").insertAdjacentElement(beforeend,newSpan);
}

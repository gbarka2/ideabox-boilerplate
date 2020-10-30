var title = document.querySelector('#title');
var body = document.querySelector('#body');

var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaBox = document.querySelector('.idea-box');
var ideaList = [];

saveButton.addEventListener('click', clearEntries)

///WORKING FUNCTION///
function clearEntries() {
  debugger
  if (title.value && body.value) {
    title.value = null;
    body.value = null;
  }
}

// 
// function clearEntries() {
//   debugger
//   if (title.value && body.value) {
//     titleAndBody.value = null;
//     //     title.value = null;
//     //     body.value = null;
//   }
// }

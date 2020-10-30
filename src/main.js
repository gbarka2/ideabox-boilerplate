var title = document.querySelector('#title');
var body = document.querySelector('#body');

var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaBox = document.querySelector('.idea-box');
var ideaList = [];

saveButton.addEventListener('click', clearEntries)

///WORKING FUNCTION///
// LOOKING TO REFACTOR USING titleAndBody ONLY
function clearEntries() {
  if (title.value && body.value) {
    title.value = null;
    body.value = null;
  }
}

/*
When title and body are null;
disable button === changing color

if (title.value = "" && body.value = "") {
  enable the saveButton
  fire the clearEntries()
  fire the dieabox creation function()
}

when the cursor is hovering over
change cursor icon

*/

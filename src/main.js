var title = document.querySelector('#title');
var body = document.querySelector('#body');

var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaBox = document.querySelector('.idea-box');
var ideaList = [];

saveButton.addEventListener('click', clearEntries)

function clearEntries() {
  if (titleAndBody.value) {
    titleAndBody.value = null;
  }
}

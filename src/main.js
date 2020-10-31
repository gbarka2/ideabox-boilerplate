var title = document.querySelector('#title');
var body = document.querySelector('#body');

var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaBox = document.querySelector('.idea-box');
var ideaSection = document.querySelector('.grid-item-3');
var disableHover = document.querySelector('.disable-hover');
var ideaList = [];
var currentIdea;

saveButton.addEventListener('click', newIdeaCard);
disableHover.addEventListener('mouseenter', enableButton);

///WORKING FUNCTION///
// LOOKING TO REFACTOR USING titleAndBody ONLY
function clearEntries() {
  if (title.value && body.value) {
    title.value = null;
    body.value = null;
  }
}

function enableButton() {
  if (title.value && body.value) {
    saveButton.disabled = false;
  }
}




// make a querySelector for a div
// that has a button nested within
// and then create an event listener with
// mouseover allowing the disable and transforming cursor

/*
When title and body are null;
disable button === changing color

if (title.value = "" && body.value = "") {
  enable the saveButton
  fire the clearEntries()
  fire the ideabox creation function()
}

when the cursor is hovering over
change cursor icon

*/

function updateIdeaList() {
  currentIdea = new Idea(title.value, body.value);
  clearEntries();
  if (!ideaList.includes(currentIdea)) {
    ideaList.push(currentIdea);
  }
}

function newIdeaCard() {
  updateIdeaList();
  ideaSection.innerHTML = '';
  for (var i = 0; i < ideaList.length; i++) {
    ideaSection.innerHTML += `
    <article class="idea-box">
      <div class="icon-bar">
        <img src="assets/star.svg" class="idea-images" id="favorite-star" alt="favorite star">
        <img src="assets/star-active.svg" class="idea-images" id="active-star" alt="favorited star" hidden>
        <img src="assets/delete.svg" class="idea-images" id="delete-idea" alt="delete idea">
        <img src="assets/delete-active.svg" class="idea-images hidden" id="active-delete" alt="please delete idea">
      </div>
      <div class="title-body">
        <h3>${ideaList[i].title}</h3>
        <p>${ideaList[i].body}</p>
      </div>
      <div class="comment-bar">
        <img src="assets/comment.svg" class="idea-images" id="add-comment" alt="add comment">
        <h4>Comment</h4>
      </div>
    </article>`
  }
}

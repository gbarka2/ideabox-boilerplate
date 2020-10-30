var title = document.querySelector('#title');
var body = document.querySelector('#body');

var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaBox = document.querySelector('.idea-box');
var ideaSection = document.querySelector('.grid-item-3');
var ideaList = [];
var currentIdea;

saveButton.addEventListener('click', newIdeaCard)

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
// take input value of title
// take input value of Body
//

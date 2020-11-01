var title = document.querySelector('#title');
var body = document.querySelector('#body');

var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaSection = document.querySelector('.grid-item-3');
var disableHover = document.querySelector('.disable-hover');
var inactiveStar = document.querySelector('#favorite-star');
var activeStar = document.querySelector('#active-star');

var ideaList = [];
var currentIdea;

saveButton.addEventListener('click', newIdeaCard);
disableHover.addEventListener('mouseenter', enableButton);
ideaSection.addEventListener('click', )

function enableButton() {
  if (title.value && body.value) {
    saveButton.disabled = false;
    saveButton.classList.remove('disable-button');
  }
};

///WORKING FUNCTION///
// LOOKING TO REFACTOR USING titleAndBody ONLY
function clearEntries() {
  if (title.value && body.value) {
    title.value = null;
    body.value = null;
    saveButton.disabled = true;
    saveButton.classList.add('disable-button');
    // possible add of "add('disable-button') function"?
  }
};

function updateIdeaList() {
  currentIdea = new Idea(title.value, body.value);
  clearEntries();
  if (!ideaList.includes(currentIdea)) {
    ideaList.push(currentIdea);
  }
};
//is there a way to manipulate below without having all the html? innerText of the h3 and p?

function newIdeaCard() {
  updateIdeaList();
  ideaSection.innerHTML = '';
  for (var i = 0; i < ideaList.length; i++) {
    ideaSection.innerHTML += `
    <article class="idea-box">
      <div class="icon-bar">
        <img src="assets/star.svg" class="idea-images" id="favorite-star" alt="favorite star">
        <img src="assets/star-active.svg" class="idea-images hidden" id="active-star" alt="favorited star">
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
};

// function deleteIdeaBox(event) {
//   if (event.target.id === 'delete-idea') {
//     for(var i = 0; i < ideaList)
//   }
// }

// inactiveStar.addEventListener('click', favoriteIdea);
// console.log('favorite star', inactiveStar);
// //ok
// console.log('active favorite star', activeStar);
// //error message of "cannot read property of null" line16
// function favoriteIdea() {
//   alert('it fired!');
//   // inactiveStar.classList.add('hidden');
// }

//I tried using .setAttribute/removeAttribute
//I tried setting activeStar.hidden = false
//I tried using hidden as an attribute and then hidden as a class value and applying the CSS property of display:none;
//The error of the event listener being null seems to be the biggest road block.
//some comments on stackoverflow indicate it has to do with the DOM not being loaded before it fires?

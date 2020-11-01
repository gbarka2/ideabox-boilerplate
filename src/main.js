var title = document.querySelector('#title');
var body = document.querySelector('#body');

var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaSection = document.querySelector('.grid-item-3');
var disableHover = document.querySelector('.disable-hover');

var ideaList = [];
var currentIdea;

saveButton.addEventListener('click', newIdeaCard);
disableHover.addEventListener('mouseenter', enableButton);
// ideaSection.addEventListener('click', deleteIdeaBox);
ideaSection.addEventListener('click', manageIdeaBox);

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
//see slack for questions on active-delete & hover

function newIdeaCard() {
  updateIdeaList();
  ideaSection.innerHTML = '';
  for (var i = 0; i < ideaList.length; i++) {
    ideaSection.innerHTML += `
    <article class="idea-box" id="${ideaList[i].id}">
      <div class="icon-bar">
        <img src="assets/star.svg" class="idea-images white-star" id="${ideaList[i].id}" alt="favorite star">
        <img src="assets/star-active.svg" class="idea-images red-star hidden" id="${ideaList[i].id}" alt="favorited star">
        <img src="assets/delete.svg" class="idea-images delete-idea" id="${ideaList[i].id}" alt="delete idea">
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

function manageIdeaBox(event) {
  debugger;
  if (event.target.className === 'delete-idea') {
    deleteIdeaBox();
  } else if (event.target.className === 'white-star' || event.target.className === 'red-star') {
    favoriteIdeaBox();
  } else {
    alert('WRONG');
  }
}

function deleteIdeaBox(event) {
  var ideaID = Number(event.target.id);
  for (var i = 0; i < ideaList.length; i++) {
    var article = document.getElementById(ideaID);
    if (ideaID === ideaList[i].id) {
      ideaList.splice(i, 1);
      ideaSection.removeChild(article);
    }
  }
};

function favoriteIdeaBox(event) {
  var ideaID = Number(event.target.id);
  var whiteStar = document.querySelector('.white-star');
  var redStar = document.querySelector('.red-star');
  for (var i = 0; i < ideaList.length; i++) {
    // var article = document.getElementById(ideaID);
    // need for later?
    if (ideaID === ideaList[i].id) {
      whiteStar.classList.toggle('hidden');
      redStar.classList.toggle('hidden');
      // ideaList[i].star = true;
      //how do we get it to unfavor then?
    }
  }
}

// function toggleStar(star){
//   if()
//   whiteStar.classList.toggle('hidden');
//   redStar.classList.toggle('hidden');
// }
//how are we accessing the DOM? --> via the parent box of ideaSection

//if/else statement to assess if user wants to favorite or to delete? That way not crossing too many paths with ideaSection.


// function favoriteIdeaBox() {
//create a getElementById for favorite-star and active-star
//if the event.target.id is the same as the ideaList[i].id
//classList.add/remove hidden
// }
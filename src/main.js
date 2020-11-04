var title = document.querySelector('#title');
var body = document.querySelector('#body');

// var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaSection = document.querySelector('.grid-item-3');
var disableHover = document.querySelector('.disable-hover');

var ideaList = [];
var currentIdea = new Idea();
var stringifiedList;

saveButton.addEventListener('click', newIdeaCard);
disableHover.addEventListener('mouseenter', enableButton);
ideaSection.addEventListener('click', manageIdeaBox);
window.addEventListener('load', getIdeaBox);


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
    currentIdea.saveToStorage(stringifiedList, ideaList);
  }
};

function newIdeaCard() {
  updateIdeaList();
  ideaSection.innerHTML = '';
  for (var i = 0; i < ideaList.length; i++) {
    ideaSection.innerHTML += `
    <article class="idea-box" id="${ideaList[i].id}">
      <div class="icon-bar">
        <img src="assets/star.svg" class="white-star" id="${ideaList[i].id}" alt="favorite star">
        <img src="assets/delete.svg" class="delete-idea" id="${ideaList[i].id}" alt="delete idea">
      </div>
      <div class="title-body">
        <h3>${ideaList[i].title}</h3>
        <p>${ideaList[i].body}</p>
      </div>
      <div class="comment-bar">
        <img src="assets/comment.svg" class="comment" id="add-comment" alt="add comment">
        <h4>Comment</h4>
      </div>
    </article>`
  }
};

function manageIdeaBox(event) {
  var targetClass = event.target
  if (targetClass.className === 'delete-idea') {
    deleteIdeaBox(event);
  } else {
    favoriteIdeaBox(targetClass);
  }
};

function favoriteIdeaBox(targetClass) {
    // var starTarget = Number(event.target.id);
    // console.log('before if statement', targetClass);
  if (targetClass.className === 'white-star') {
    // console.log('after if statement', targetClass);
    // starTarget = true;
    targetClass.src = "assets/star-active.svg"
    targetClass.classList.add('red-star')
    targetClass.classList.remove('white-star')
    starFavorite(targetClass);
    // currentIdea.updateIdea(stringifiedList, ideaList);
  } else if (targetClass.className === 'red-star') {
    // starTarget = false;
    targetClass.src = "assets/star.svg"
    targetClass.classList.add('white-star')
    targetClass.classList.remove('red-star')
    starFavorite(targetClass);
    // currentIdea.updateIdea(stringifiedList, ideaList);
  }
};

function deleteIdeaBox(event) {
  var ideaID = Number(event.target.id);
  for (var i = 0; i < ideaList.length; i++) {
    var article = document.getElementById(ideaID);
    if (ideaID === ideaList[i].id) {
      ideaList.splice(i, 1);
      ideaSection.removeChild(article);
      currentIdea.deleteFromStorage(stringifiedList, ideaList);
    }
  }
};

function getIdeaBox() {
  onLoadStar();
  if (localStorage.length > 0) {
    var retrieved = localStorage.getItem('storedIdeas');
    ideaList = JSON.parse(retrieved);
    ideaSection.innerHTML = '';
    for (var i = 0; i < ideaList.length; i++) {
      ideaSection.innerHTML += `
      <article class="idea-box" id="${ideaList[i].id}">
      <div class="icon-bar">
      <img src="assets/star.svg" class="white-star" id="${ideaList[i].id}" alt="favorite star">
      <img src="assets/delete.svg" class="delete-idea" id="${ideaList[i].id}" alt="delete idea">
      </div>
      <div class="title-body">
      <h3>${ideaList[i].title}</h3>
      <p>${ideaList[i].body}</p>
      </div>
      <div class="comment-bar">
      <img src="assets/comment.svg" class="comment" id="add-comment" alt="add comment">
      <h4>Comment</h4>
      </div>
      </article>`
    }
  }
}

function starFavorite(targetClass) {
  for (var i = 0; i < ideaList.length; i++) {
    if (Number(targetClass.id) === ideaList[i].id) {
      ideaList[i].updateIdea();
      currentIdea.deleteFromStorage(stringifiedList, ideaList);
    }
  }
};

function onLoadStar() {
  // var targetClass = event.target;
  for (var i = 0; i < ideaList.length; i++) {
    if (ideaList[i].star === true) {
      var targetClass = document.getElementById(`${ideaList[i].id}`);
      targetClass.src = "assets/star-active.svg"
      targetClass.classList.add('red-star')
      targetClass.classList.remove('white-star')
    }
  }
};
// when favorited .star value assigned to true
// red colored star persists
// when unfavortied .star value assigned to false
// white star persists

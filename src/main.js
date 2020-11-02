var title = document.querySelector('#title');
var body = document.querySelector('#body');

// var titleAndBody = document.querySelectorAll('.form-entries');
var saveButton = document.querySelector('.save-button');
var ideaSection = document.querySelector('.grid-item-3');
var disableHover = document.querySelector('.disable-hover');

var ideaList = [];
var currentIdea;

saveButton.addEventListener('click', newIdeaCard);
disableHover.addEventListener('mouseenter', enableButton);
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
        <img src="assets/star.svg" class="white-star" id="white-star" alt="favorite star">
        <img src="assets/star-active.svg" class="red-star hidden" id="red-star" alt="favorited star">
        <img src="assets/delete.svg" class="delete-idea" id="${ideaList[i].id}" alt="delete idea">
        <img src="assets/delete-active.svg" class="hidden" id="active-delete" alt="please delete idea">
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
  var targetClass = event.target.className
  if (targetClass === 'delete-idea') {
    deleteIdeaBox(event);
  } else if (targetClass === 'white-star' || targetClass === 'red-star') {
    favoriteIdeaBox(event);
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

//&& targetID === whiteImage
// && targetID === redImage

function favoriteIdeaBox(event) {
  var variable
  // having trouble discerning how to target the
  // class/id
  
    if (star = false) {
      star = true;
      variable.classList.remove(white)
      variable.classList.add(red);
    } else if (star = true) {
      star = false;
      variable.classList.remove(red)
      variable.classList.add(white)
    }
}

// function favoriteIdeaBox(event) {
//   debugger
//   var whiteStarID = Number(event.target.id);
//   var redStarID = Number(event.target.id);
//   // var whiteStar = document.getElementById(whiteStarID);
//   // var redStar = document.getElementById(redStarID);
//   var whiteImage = document.querySelector(".white-star");
//   var redImage = document.querySelector(".red-star")
//   // var whiteImage = event.target.className;
//   // var redImage = event.target.className;
//   for (var i = 0; i < ideaList.length; i++) {
//     if (whiteStarID === ideaList[i].id) {
//       // document.getElementByID('white-star').src="assets/star-active.svg";
//       whiteImage.classList.toggle('hidden');
//       redImage.classList.toggle('hidden');
//       // ideaList[i].star = true;
//       //how do we get it to unfavor then?
//     }
//   }
// }

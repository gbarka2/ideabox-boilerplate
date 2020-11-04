class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage(stringifiedList, ideaList) {
    stringifiedList = JSON.stringify(ideaList);
    localStorage.setItem('storedIdeas', stringifiedList);
  }

  deleteFromStorage(stringifiedList, ideaList) {
    localStorage.removeItem('storedIdeas');
    stringifiedList = JSON.stringify(ideaList);
    localStorage.setItem('storedIdeas', stringifiedList)
  }

  updateIdea(stringifiedList, ideaList) {
    // targetClass = Number(event.target.id);
    // var targetId = Number(targetClass.id);
    for (var i = 0; i < ideaList.length; i++) {
      if(this.id === ideaList[i].id) {
        if (this.star === true) {
          deleteFromStorage(stringifiedList, ideaList);
        }else if (this.star === false) {
          deleteFromStorage(stringifiedList, ideaList);
        }
      }
    }
  }
};

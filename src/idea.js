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
    localStorage.setItem('storedIdeas', stringifiedList);
  }

  updateIdea() {
    if (this.star === false) {
      this.star = true;
    }else if (this.star === true) {
      this.star = false;
    }
  }
};

class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }
  saveToStorage(ideaList) {
    var stringifiedList = JSON.stringify(ideaList);
    localStorage.setItem('storedIdeas', stringifiedList);
  }
  deleteFromStorage() {

  }
  updateIdea() {

  }
}

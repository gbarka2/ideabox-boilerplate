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
    console.log(localStorage);
    //now local storage is clear of *everything*      
    stringifiedList = JSON.stringify(ideaList);
    localStorage.setItem('storedIdeas', stringifiedList)
    console.log('after', localStorage)
  }
  updateIdea() {

  }
}

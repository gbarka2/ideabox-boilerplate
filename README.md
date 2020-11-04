#GCG IdeaBox
​
This group project focuses on developing an application to store ideas. It's your own virtual, customizable bulletin board.
​
We created an user interface that keeps our ideas safe and available upon refresh while looking good at the same time!
​
##To View
To view and interact with this application please follow [this link](https://gbarka2.github.io/ideabox-boilerplate/).
No other software is necessary. Please check if your preferred browser is up to date to provide as smooth as possible interactions.
​
Screen shot example can be found below.
![Example](assets/Snip10101104_8.jpg)
​
##Future Iterations & Needed Debugging
### CSS & HTML
- Window will need to react to screen and window size changes, and a reassessment of grid values may be necessary.
- Search bar can be cut off on window resizing, and a reassessment of grid values may be necessary.
- Research needed to determine if it is possible to have static HTML code regarding the Idea Box articles. It is currently entered via innerHTML, however may be better served as a toggle and cloned code per Idea Box.
​
### JavaScript
- Upon page reload, while data still indicates that an Idea is favorited in local storage, the HTML image of the red star does not persist.
  - We are able to insert the red star image when initially favorited via innerHTML prior to page reload.
  - We are also able to change the value of the object instance's "star" property to "true". This persists upon reload of the page.
  - We believe we are targeting the incorrect area of the page to obtain the properties necessary to complete functionality.
- After page reload, we are unable to alter the object instance's "star" property to "false."
  - The error received is that ideaList is "undefined," however the variable of ideaList when console.logged indicates the local storage has persisted.
  - When utilizing "debugger," we observed that the variable ideaList.length returned as 0. We did attempt an if statement to rectify in the case the for loop was iterating too early, however this had no affect on the outcome.
- Iteration 4
  - We were unable to complete the following:
    - Utilizing the "Show Starred Ideas" button and the "Show All Ideas" button.
    - Utilizing the search tool to show targeted Ideas.
- Iteration 5
  - Utilizing the comments section of the Idea Box.
​
##Contributions & Thanks
The main contributors of this project in alphabetical order are: Cameron Aragon (@caragon4695), Gary Barkauski (@gbarka2), and Gabrielle Joyce (@gaj23).
Additional thanks to our mentors and rocks. We are indebted to their guidance and input: Alyssa Bull (@alyssabull), Mike Duke (@mike-duke), and Brian Sayler(@saylerb).
​
If you are interested in contributing please:
- clone down this repo: `git@github.com:gbarka2/ideabox-boilerplate.git`
- create a new branch: `git checkout -b your-initials/feature/feature-name`
- contribute as you like
- in the terminal, push the branch upstream
- create a pull request via github
- wait for our reply
Thank you in advance for your input!
​
###Contact
Please follow any of us on github or to reach out about this or any other projects.
- Cameron Aragon @caragon4695
- Gary Barkauski @gbarka2
- Gabrielle Joyce @gaj23  

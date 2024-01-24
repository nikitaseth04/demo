document.querySelector("html").addEventListener("click", function () {
    alert("Hello! Thanks for coming to this website!");
  });
  

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Nikita Seth's Webpage for DS4200! Welcome, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Nikita Seth's Webpage! Welcome, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
    
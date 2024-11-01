const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      logo = sidebar.querySelector('#logo');


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Világos mód";
    }else{
        modeText.innerText = "Sötét mód";
        
    }
    if (body.classList.contains("dark")) {
        modeText.innerText = "Világos mód"; // Light mode text
        logo.src = 'open-book.png'; // Dark mode logo path
    } else {
        modeText.innerText = "Sötét mód"; // Dark mode text
        logo.src = 'book.png'; // Light mode logo path
    }
});

const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=religious,political&type=single";
let getJoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`
    })
}
btn.addEventListener("click",getJoke);
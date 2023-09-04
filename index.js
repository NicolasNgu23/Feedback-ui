// selectionner tout les objet rating
const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating ="";
// avoir accés à chacun d'entre eux.
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event)=>{
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;

    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});


btnEl.addEventListener('click', () =>{
  if(selectedRating !== ""){
    containerEl.innerHTML = `
    <strong> Thanks You !  </strong>
    <br>
    <br>
    <strong> Feedback: ${selectedRating} </strong>
    <br>
    <br>
    <p>We'll use your feedback to improve our customer experience !</p>
    `
  }
})

function removeActive() {
  ratingEls.forEach((ratingEl) =>{
    ratingEl.classList.remove("active");
  });
}

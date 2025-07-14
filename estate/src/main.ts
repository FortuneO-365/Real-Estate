
const btn = document.getElementById("btn")!;
const tempNav = document.getElementById("temp-nav")!;

btn.addEventListener('click', () => {
  btn.classList.toggle("selected");
  tempNav.classList.toggle("active");
})

window.addEventListener('resize',() => {
  btn.classList.remove("selected");
  tempNav.classList.remove("active");
})



// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

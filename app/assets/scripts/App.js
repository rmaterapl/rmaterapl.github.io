import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import ReavealOnScroll from "./modules/RevealOnScroll"
import Header from "./modules/Header"

new Header()
new MobileMenu()
new ReavealOnScroll(document.querySelectorAll(".service-item"), 75)
new ReavealOnScroll(document.querySelectorAll(".pricing-item"), 75)
let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import("./modules/Modal")
        .then(x => {
          modal = new x.default()
          setTimeout(() => modal.openModal(), 50)
        })
        .catch(() => console.log("There was a problem. Please try again."))
    } else {
      modal.openModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("current-year").textContent = new Date().getFullYear();
});

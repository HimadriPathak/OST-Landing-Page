const navBar = document.querySelector(".nav");
const navButton = document.querySelector(".nav-toggle");

const footerForm = document.querySelector(".footer-form");
const emailForm = footerForm.querySelector(".footer-email");

// Hamburger Navigation
function toggleNavigation() {
  if (navBar.classList.contains("is-open")) {
    this.setAttribute("aria-expanded", false);
    navBar.classList.remove("is-open");
  } else {
    navBar.classList.add("is-open");
    this.setAttribute("aria-expanded", true);
  }
}

// Newsletter form submit
function createAlert(elem, msg) {
  if (footerForm.querySelector("span.form-error-message")) return;
  const alertElement = document.createElement(elem);
  alertElement.setAttribute("role", "alert");
  alertElement.classList.add("form-error-message");
  alertElement.textContent = msg;
  emailForm.insertAdjacentElement("afterend", alertElement);
}

function handleFormSubmit(e) {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(emailForm.value.trim())) {
    e.preventDefault();
    footerForm.classList.add("form-error");
    createAlert("span", "Email is not valid");
  }
}





// Event Listeners
navButton.addEventListener("click", toggleNavigation);
footerForm.addEventListener("submit", handleFormSubmit);

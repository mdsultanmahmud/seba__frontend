// Select the necessary DOM elements
const locationDiv = document.querySelector(".sheba__location");
const modalContainer = document.querySelector(
  ".seba__banner__modal__container"
);
const closeModalButton = document.querySelector("#seba__modal__close__btn");

// Function to open the modal
function openModal() {
  modalContainer.style.display = "grid";
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeModal() {
  modalContainer.style.display = "none";
  document.body.style.overflow = "";
}

// Add event listeners
locationDiv.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

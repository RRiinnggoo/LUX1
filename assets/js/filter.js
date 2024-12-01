document.addEventListener("click", clickEvent);

function clickEvent(event) {
  if (event.target.closest(".btn-filter")) {
    let filterAutoModelValue = document.querySelector(".type-service").value;
    console.log(filterAutoModelValue);
    if (filterAutoModelValue.length > 0) {
      console.log(filterAutoModelValue);
      document
        .querySelectorAll(".services_cards__box_elem")
        .forEach(
          (cardsItem) =>
            (cardsItem.style.display =
              cardsItem.id === filterAutoModelValue ? "flex" : "none")
        );
    } else {
      document
        .querySelectorAll(".services_cards__box")
        .forEach((cardsItem) => (cardsItem.style.display = "flex"));
    }
  }
}

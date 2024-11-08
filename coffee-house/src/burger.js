const navigation = document.querySelector(".navigation");
navigation.addEventListener("click", showHideBurgerMenu);
const burgerButton = document.querySelector(".burger-menu");
burgerButton.addEventListener("click", showHideBurgerMenu);

function showHideBurgerMenu(event) {
  if (
    !event.target.closest == burgerButton ||
    !event.target.closest == ".navigation__item" ||
    !event.target.closest == ".header__menu"
  ) {
    console.log("jj");
    return;
  }

  burgerButton.classList.toggle("burger-menu_active");
  navigation.classList.toggle("navigation_active");

  const page = document.querySelector(".page");
  page.classList.toggle("page_enabled-scroll");
}

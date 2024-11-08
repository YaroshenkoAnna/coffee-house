
    const switches = document.querySelector(".section__switches");
    switches.addEventListener("click", switchMenu)


export function switchMenu(event){
  if (!event.target.closest(".button")) {
      return;
  }

  const activeSwitchButton = document.querySelector(".button_active");
  const switchButton = event.target.closest(".button");
  
  activeSwitchButton.classList.remove("button_active");
  switchButton.classList.add("button_active");

  const activeMenu = document.querySelector(".section__menu-wraper_active");
  const switchMenu = document.getElementById(`${switchButton.id}Menu`);

  activeMenu.classList.remove("section__menu-wraper_active");
  switchMenu.classList.add("section__menu-wraper_active");

}
document.addEventListener('click', (e) => {
  const targetElement = e.target;
  const dropDown = targetElement.nextElementSibling;
  console.log(dropDown === targetElement);
  const dropDowns = document.querySelectorAll('.nav-dropdown');
  if ([...dropDowns].includes(dropDown)) {
    // Dropdown clicked, close other dropdowns
    closeDropDownsExcept(dropDown);
  } else {
    // Clicked outside the dropdown, close all dropdowns
    closeAllDropDowns();
  }
});

function closeDropDownsExcept(exceptDropDown) {
  const dropDowns = document.querySelectorAll('.nav-dropdown');
  // If clicked on dropDown to close it
  if (!exceptDropDown.classList.contains('hidden')) {
    exceptDropDown.classList.toggle('hidden');
  } else {
    dropDowns.forEach((dropDown) => {
      if (dropDown !== exceptDropDown) {
        dropDown.classList.add('hidden');
      } else {
        exceptDropDown.classList.remove('hidden');
      }
    });
  }
}
function closeAllDropDowns() {
  const dropDowns = document.querySelectorAll('.nav-dropdown');
  dropDowns.forEach((dropDown) => {
    dropDown.classList.add('hidden');
  });
}

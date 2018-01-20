
function changeBgColor() {
  const options = document.getElementById('backcolor-select').options;
  const targetElement = document.getElementsByTagName('main')[0];
  const selected = options.selectedIndex;
  if (selected) {
    const color = options[selected].value;
    targetElement.style.backgroundColor = color;
  }
  targetElement.style.backgroundColor = options[selected].value;
}
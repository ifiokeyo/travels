function showTip(id) {
  const div = document.getElementById(id);
  const parent = div.parentElement;
  const grandParent = parent.parentElement;

  if (div.style.display == 'block') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
  }
}

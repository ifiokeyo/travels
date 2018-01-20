function showContent(id) {
  const div = document.getElementById(id);
  const parent = div.parentElement;
  const grandParent = parent.parentElement;

  if (div.style.display == 'block') {
    div.style.display = 'none';
    parent.style.border = "none";
    parent.style.backgroundColor = "transparent";
    grandParent.style.height = '6.3rem'
  }
  else {
    div.style.display = 'block';
    parent.style.backgroundColor = "#fff";
    parent.style.border = "thin solid rgba(0,0,0,.125)";
    grandParent.style.height = '17.7rem';
  }
}


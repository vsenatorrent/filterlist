var input = document.querySelector('input');

function f() {
  var filter = input.value.toUpperCase(),
    li = document.querySelectorAll('li');

  for (var i = 0; i < li.length; i++) {
    var a = li[i].querySelectorAll('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

input.onkeyup = f;

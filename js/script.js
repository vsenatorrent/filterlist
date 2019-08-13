// var input = document.querySelector('input');

// function f() {
//   var filter = input.value.toUpperCase(),
//     li = document.querySelectorAll('li');

//   for (var i = 0; i < li.length; i++) {
//     var a = li[i].querySelectorAll('a')[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = '';
//     } else {
//       li[i].style.display = 'none';
//     }
//   }
// }

// input.onkeyup = f;

const input = document.querySelector('.filter-list__input');
const names = document.querySelectorAll('.filter-list__item');

const toLower = word => word.toLowerCase();

const displayResult = (node, visible) => {
  if(visible){
    node.classList.remove('invisible');
    node.classList.add('visible');
  } else {
    node.classList.remove('visible');
    node.classList.add('invisible');
  } 
}

const getNames = (event) => {
  const inputValue = toLower(event.target.value);
  [...names].forEach(name => {
    const condition = toLower(name.innerText).indexOf(inputValue);
    condition === -1 ? displayResult(name, 0) : displayResult(name, 1);
  })
}

input.addEventListener('input', getNames);

const setContent = (div, i) => {
  div.innerText = `item ${i+1}`
  div.className = 'square'
}

const setButton = (div, button) => {
  div.appendChild(button)
  button.className = 'btn'
  button.innerHTML = 'Remove me'
}

const removeMe = (div, markUpEveryThird) => {
  confirm('are you sure to delete  this element') && div.remove()
  const allDivs = document.querySelectorAll('div')
  markUpEveryThird(allDivs)
}

const markUpEveryThird = (allDivs) => {
  const divsArray = Array.from(allDivs)
  divsArray.filter((el, i) => {
    el.classList.contains('hoverEl') && el.classList.remove('hoverEl')
    return i % 3 === 0 + 2 ? (el.classList += ' hoverEl') && (el.onclick = () => setColoredClass(el)) : '';
  })
}

const setColoredClass = (el) => {
  !el.classList.contains('clickedSquare') ? (el.classList += ' clickedSquare') : el.classList.remove('clickedSquare');
};

(function () {
  for(let i = 0; i < 100; i++) {
    const div = document.createElement('div')
    const button = document.createElement('button')

    document.getElementById('mainSection').appendChild(div)
    setContent(div, i)
    setButton(div, button)
    button.onclick= () => removeMe(div, markUpEveryThird)
  }
  
    const allDivs = document.querySelectorAll('div')
    markUpEveryThird(allDivs)
})();

function DomManipulation(){}
DomManipulation.prototype.init = function(){
  const main = document.createElement('main');
  const div = document.createElement('div')
  main.appendChild(div);
  return {
    main, div
  }
}